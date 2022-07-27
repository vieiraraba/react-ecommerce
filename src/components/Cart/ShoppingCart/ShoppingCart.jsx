import CartItem from "../CartItem/CartItem";
import { useState, useEffect } from "react";
import { Button, Loading } from "@nextui-org/react";

import "./ShoppingCart.css";

/* A function that takes in 4 parameters. */
const ShoppingCart = ({ shoppingCart, setShoppingCart, userCache, notifyToast }) => {
	const [totalItemPrice, setTotalItemPrice] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	/**
	 * If the user is not authenticated, notify the user that they need to be authenticated, otherwise,
	 * set the loading state to true, fetch the create-checkout-session endpoint, if the response is ok,
	 * return the response as json, otherwise, return the response as json and then reject the json, then,
	 * if the url is returned, set the loading state to false and redirect the user to the url, otherwise,
	 * catch the error and log it to the console.
	 * @returns The response from the server is a JSON object with a url property.
	 */
	useEffect(() => {
		let sumTotalItemPrice = 0;

		shoppingCart.forEach((item) => {
			sumTotalItemPrice += item.itemPrice * item.itemQuantity;
		});

		setTotalItemPrice(sumTotalItemPrice);
	}, [shoppingCart]);

	const handleCheckout = () => {
    if (userCache.username === undefined) {
      notifyToast('You need to be authenticated!', true);
      return;
    }
		setIsLoading(true);
		fetch("http://localhost:4242/create-checkout-session", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ shoppingCart }),
		})
			.then((res) => {
				if (res.ok) return res.json();
				return res.json().then((json) => Promise.reject(json));
			})
			.then(({ url }) => {
				setIsLoading(false);
				window.location = url;
			})
			.catch((e) => {
				console.error(e);
			});
	};

	return (
		<div className='main__cart'>
			<h3>Shopping Cart</h3>
			<ul className='cart__list'>
				{shoppingCart.length > 0 ? (
					shoppingCart.map(
						({ itemId, itemTitle, itemPrice, itemImage, itemQuantity }) => {
							return (
								<CartItem
									key={itemId}
									itemId={itemId}
									itemTitle={itemTitle}
									itemPrice={itemPrice}
									itemImage={itemImage}
									itemQuantity={itemQuantity}
									shoppingCart={shoppingCart}
									setShoppingCart={setShoppingCart}
								/>
							);
						},
					)
				) : (
					<h1>Empty Cart</h1>
				)}
			</ul>
			<div className='cart__bottom'>
				<p className='cart__total'>Total:</p>
				<p className='cart__total_price'>€{totalItemPrice}</p>
			</div>
			<Button
				bordered
				color='warning'
				auto
				onClick={handleCheckout}
				disabled={isLoading || shoppingCart.length === 0}
			>
				{isLoading ? <Loading type='points' color='warning' /> : "Checkout"}
			</Button>
		</div>
	);
};

export default ShoppingCart;
