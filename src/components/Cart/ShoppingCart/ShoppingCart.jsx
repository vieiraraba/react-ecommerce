/* Importing the CSS file for the component. */
import "./ShoppingCart.css";

/* Importing the CartItem component from the CartItem folder. */
import CartItem from "../CartItem/CartItem";

/* Importing the useState and useEffect hooks from the React library. */
import { useState, useEffect } from "react";

/* Importing the Button component from the NextUI library. */
import { Button } from "@nextui-org/react";

const ShoppingCart = ({ shoppingCart, setShoppingCart }) => {
  const [totalItemPrice, setTotalItemPrice] = useState(0);

  // useEffect(() => {
  // 	let totalPrice = 0;

  // 	cart.forEach((item) => {
  // 		totalPrice += item.cartPrice * item.amount;
  // 	});

  // 	setTotal(totalPrice);
  // }, [cart]);

  /* A hook that is used to update the state of the component. */
  useEffect(() => {
    let sumTotalItemPrice = 0;
    shoppingCart.forEach((item) => {
      sumTotalItemPrice += item.itemPrice * item.itemQuantity;
    });

    setTotalItemPrice(sumTotalItemPrice);
  }, [shoppingCart]);

  return (
    <div className="main__cart">
      <h3>Shopping Cart</h3>
      <ul className="cart__list">
        {/* Mapping through the shoppingCart array and returning a CartItem component for each item in
       the array. */}

        {/* A ternary operator. If the shoppingCart array is empty, it will return the Empty Cart text.
        If the shoppingCart array is not empty, it will map through the array and return a CartItem
        component for each item in the array. */}

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
            }
          )
        ) : (
          <h1>Empty Cart</h1>
        )}

      </ul>
      <div className="cart__bottom">
        <p className="cart__total">Total:</p>
        <p className="cart__total_price">€{totalItemPrice}</p>
      </div>
      <Button bordered color="warning" auto>
        Checkout
      </Button>
    </div>
  );
};

export default ShoppingCart;
