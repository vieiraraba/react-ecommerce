import { useState } from "react";
import { Button } from "@nextui-org/react";
import "./CartItem.css";

const CartItem = ({
  imteId,
  itemTitle,
  itemPrice,
  itemImage,
  cart,
  setCart,
  itemQuantity,
}) => {
  // const [amount, setAmount] = useState(quantity);

  // const handleAdd = () => {
  //   setAmount(amount + 1);

  //   cart.forEach((item) => {
  //     if (item.cartId === id) {
  //       item.amount = amount + 1;
  //     }
  //   });

  //   setCart([...cart]);
  // };

  // const handleMinus = () => {
  //   if (amount === 1) return;
  //   setAmount(amount - 1);

  //   cart.forEach((item) => {
  //     if (item.cartId === id) {
  //       item.amount = amount - 1;
  //     }
  //   });

  //   setCart([...cart]);
  // };

  // const handleRemove = () => {
  //   const newCart = cart.filter((item) => item.cartId !== id);
  //   setCart(newCart);
  // };

  return (
    <div className="cart__item">
      <img className="cart__item_image" src={itemImage} alt="product" />
      <div>
        <p className="cart__item_title">{itemTitle}</p>
        <p className="cart__item_price">€ {itemPrice}</p>
        <div className="cart__item_bottom">
          <Button light color="error" auto>
            -
          </Button>
          {/* <p>{amount}</p> */}
          <p>1</p>
          <Button light color="error" auto>
            +
          </Button>
          <Button light color="error" auto>
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
