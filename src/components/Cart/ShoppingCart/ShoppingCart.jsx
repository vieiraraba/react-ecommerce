/* Importing the CSS file for the component. */
import "./ShoppingCart.css";

/* Importing the CartItem component from the CartItem folder. */
import CartItem from "../CartItem/CartItem";

/* Importing the useState and useEffect hooks from the React library. */
import { useState, useEffect } from "react";

/* Importing the Button component from the NextUI library. */
import { Button } from "@nextui-org/react";


const ShoppingCart = ({ shoppingCart, setShoppingCart }) => {
  const [total, setTotal] = useState(0);

  // useEffect(() => {
  // 	let totalPrice = 0;

  // 	cart.forEach((item) => {
  // 		totalPrice += item.cartPrice * item.amount;
  // 	});

  // 	setTotal(totalPrice);
  // }, [cart]);
  return (
    <div className="main__cart">
      <h3>Shopping Cart</h3>
      <ul className="cart__list">
       {/* Mapping through the shoppingCart array and returning a CartItem component for each item in
       the array. */}
        {shoppingCart.map(
          ({ itemId, itemTitle, itemPrice, itemImage, itemQuantity }) => {
            return (
              <CartItem
                key={itemId}
                itemId={itemId}
                itemTitle={itemTitle}
                itemPrice={itemPrice}
                itemImage={itemImage}
                itemQuantity={itemQuantity}
              />
            );
          }
        )}

        {/* {cart.length === 0 ? (
					<p>No items in the cart</p>
				) : (
					<div>
						{cart.map((item, index) => {
							return (
								<CartItem
									key={index}
									id={item.cartId}
									title={item.cartTitle}
									price={item.cartPrice}
									image={item.cartImage}
									quantity={item.amount}
									cart={cart}
									setCart={setCart}
								/>
							);
						})}
					</div>
				)} */}
      </ul>
      <div className="cart__bottom">
        <p className="cart__total">Total:</p>
        <p className="cart__total_price">€{total}</p>
      </div>
      <Button bordered color="warning" auto>
        Checkout
      </Button>
    </div>
  );
};

export default ShoppingCart;
