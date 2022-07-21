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
  wishlistCart,
  setWishlistCart,
  wish
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
 * If the item is in the wishlist, remove it from the wishlist. If the item is in the shopping cart,
 * remove it from the shopping cart.
 */
  const itemRemove = () => {
    if (wish) {
      const newWishList = wishlistCart.filter(
        (wishItem) => wishItem.itemId !== itemId,
      );
      setWishlistCart(newWishList);

    } else {
      const newCart = shoppingCart.filter((item) => item.itemId !== itemId);
      setShoppingCart(newCart);
    }
  };

/**
 * Check if the item is already in the shopping cart.
 * @returns the value of the variable noItemInShoppingCart.
 */
  const checkShoppingCart = () => {
    let noItemInShoppingCart = false;
    shoppingCart.forEach((item) => {
      if (item.itemId === itemId) {
        noItemInShoppingCart = true;
      }
    });
    console.log(noItemInShoppingCart);
    return noItemInShoppingCart;
  };


/**
 * If the item is already in the shopping cart, don't add it again. Otherwise, add it to the shopping
 * cart.
 * @returns the value of the function.
 */
 const addToShoppingCart = () => {
  if (checkShoppingCart()) return;
  setShoppingCart([
    ...shoppingCart,
    {
      itemId: itemId,
      itemTitle: itemTitle,
      itemPrice: itemPrice,
      itemImage: itemImage,
      itemQuantity: 1,
    },
  ]);
  itemRemove();
};


  /* Returning the JSX code for the component. */
  return (
    <div className="cart__item">
      <img className="cart__item_image" src={itemImage} alt="product" />
      <div>
        <p className="cart__item_title">{itemTitle}</p>
        <p className="cart__item_price">€ {itemPrice}</p>
        <div className="cart__item_bottom">

       {/* A ternary operator. If the value of the variable wish is true, then the first part of the
       ternary operator is executed. Otherwise, the second part of the ternary operator is executed. */}

        {wish ? (
            <Button light color='error' auto onClick={addToShoppingCart} >
              Add to Cart
            </Button>
          ) : (
            <>
              <Button light color='error' auto onClick={restQuantityItem}>
                -
              </Button>
              <p>{itemQuantity}</p>
              <Button light color='error' auto onClick={addQuantityItem}>
                +
              </Button>
            </>
          )}
          <Button light color="error" auto onClick={itemRemove}>
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
