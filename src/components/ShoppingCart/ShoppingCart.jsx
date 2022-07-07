import "./ShoppingCart.css";
import Button from "@mui/material/Button";
import CartItem from "../CartItem/CartItem";

const ShoppingCart = ({ cart, setCart }) => {
  return (
    <div className="main__cart">
      <h3 className="cart-title">Shopping Cart</h3>
      <ul className="cart__list">
        {cart.map((item, index) => {
          return (
            <CartItem
              key={index}
              id={item.cartId}
              title={item.cartTitle}
              price={item.cartPrice}
              image={item.cartImage}
            />
          );
        })}
      </ul>
      <div className="cart__bottom">
        <p className="cart__total">Total:</p>
        <p className="cart__total_price">€0</p>
      </div>
      <Button
        variant="outlined"
        color="error"
        size="large">
          Checkout</Button>
    </div>
  );
};

export default ShoppingCart;