import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CartItem from "../CartItem/CartItem";

import "./ShoppingCart.css";

const ShoppingCart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalPrice = 0;

    cart.forEach((item) => {
      totalPrice += item.cartPrice * item.amount;
    });

    setTotal(totalPrice);
  }, [cart]);

  return (
    <div className="main__cart">
      <ul className="cart__list">
        {cart.length === 0 ? (
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
        )}
      </ul>
      <div className="cart__bottom">
        <p className="cart__total">Total:</p>
        <p className="cart__total_price">€{total}</p>
      </div>
      <Button variant="outlined" color="error" size="large">
        Checkout
      </Button>
    </div>
  );
};

export default ShoppingCart;