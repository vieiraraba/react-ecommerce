import { useState } from "react";


import "./CartItem.css";

const CartItem = ({ id, title, price, image, cart, setCart, quantity }) => {
  const [amount, setAmount] = useState(quantity);

  const handleAdd = () => {
    setAmount(amount + 1);

    cart.forEach((item) => {
      if (item.cartId === id) {
        item.amount = amount + 1;
      }
    });

    setCart([...cart]);
  };

  const handleMinus = () => {
    if (amount === 1) return;
    setAmount(amount - 1);

    cart.forEach((item) => {
      if (item.cartId === id) {
        item.amount = amount - 1;
      }
    });

    setCart([...cart]);
  };

  const handleRemove = () => {
    const newCart = cart.filter((item) => item.cartId !== id);
    setCart(newCart);
  };

  return (
    <div className="cart__item">
      <img className="cart__item_image" src={image} alt="" />
      <div>
        <p className="cart__item_title">{title}</p>
        <p className="cart__item_price">{price}</p>
        <div className="cart__item_bottom">
          <button variant="contained" className="" onClick={handleMinus}>
            -
          </button>
          <p>{amount}</p>
          <button variant="contained" onClick={handleAdd}>
            +
          </button>
          <button variant="contained" onClick={handleRemove}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;