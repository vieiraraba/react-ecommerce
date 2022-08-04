require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(
	cors({
		origin: "http://localhost:3000",
		//   origin: process.env.CLIENT_URL,
	}),
);

app.post("/create-checkout-session", async (req, res) => {
	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			mode: "payment",
			line_items: req.body.shoppingCart.map((item) => {
				return {
					price_data: {
						currency: "eur",
						product_data: {
							name: item.itemTitle,
						},
						unit_amount: item.itemPrice * 100,
					},
					quantity: item.itemQuantity,
				};
			}),
			success_url: `${process.env.CLIENT_URL}/success`,
			cancel_url: `${process.env.CLIENT_URL}/cancel`,
		});
		res.json({ url: session.url });
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
});

const PORT = 4242;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));