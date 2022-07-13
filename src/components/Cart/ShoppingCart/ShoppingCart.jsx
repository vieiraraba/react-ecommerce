import CartItem from "../CartItem/CartItem";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";

import "./ShoppingCart.css";

const ShoppingCart = ({ shoppingCart, setShoppingCart }) => {
  const [total, setTotal] = useState(0);

  // useEffect(() => {
  // 	let totalPrice = 0;

  // 	cart.forEach((item) => {
  // 		totalPrice += item.cartPrice * item.amount;
  // 	});

  // 	setTotal(totalPrice);
  // }, [cart]);
  console.log(shoppingCart);
  return (
    <div className="main__cart">
      <h3>Shopping Cart</h3>
      <ul className="cart__list">
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
