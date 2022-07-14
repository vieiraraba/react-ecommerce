/* Importing the CSS file for the component. */
import "./CartItem.css";

/* Importing the useState hook from the React library. */
import { useState } from "react";

/* Importing the Button component from the NextUI React library. */
import { Button } from "@nextui-org/react";


/* A function that takes in the props of the component. */
const CartItem = ({
  itemId,
  itemTitle,
  itemPrice,
  itemImage,
  shoppingCart,
  setShoppingCart,
  itemQuantity,
}) => {
 /**
  * If the item quantity is 1, return. Otherwise, find the item in the shopping cart and decrement the
  * item quantity. Then, set the shopping cart to the new shopping cart.
  * @returns the value of the itemQuantity property of the item object.
  */
  const restQuantityItem = () => {
    if (itemQuantity === 1)return;
    shoppingCart.forEach((item) => {
      if (item.itemId === itemId) {
        item.itemQuantity -= 1;
      }
    });
    setShoppingCart([...shoppingCart]);
  };

 /**
  * If the itemId of the item in the shoppingCart array is equal to the itemId of the item that was
  * clicked, then add 1 to the itemQuantity of that item.
  */
  const addQuantityItem = () => {
    shoppingCart.forEach((item) => {
      if (item.itemId === itemId) {
        item.itemQuantity += 1;
      }
    });
    setShoppingCart([...shoppingCart]);
  };
 /**
  * The function itemRemove() filters the shoppingCart array and returns a new array with the item
  * removed.
  */
  const itemRemove = () => {
    const newCart = shoppingCart.filter((item) => item.itemId !== itemId);
    setShoppingCart(newCart);
  };

  /* Returning the JSX code for the component. */
  return (
    <div className="cart__item">
      <img className="cart__item_image" src={itemImage} alt="product" />
      <div>
        <p className="cart__item_title">{itemTitle}</p>
        <p className="cart__item_price">€ {itemPrice}</p>
        <div className="cart__item_bottom">
          <Button light color="error" auto onClick={restQuantityItem}>
            -
          </Button>
          <p>{itemQuantity}</p>
          <Button light color="error" auto onClick={addQuantityItem}>
            +
          </Button>
          <Button light color="error" auto onClick={itemRemove}>
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
