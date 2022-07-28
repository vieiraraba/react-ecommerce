import "./ShoppingCart.css";
import CartItem from "../CartItem/CartItem";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";

const ShoppingCart = ({ shoppingCart, setShoppingCart }) => {
  const [totalItemPrice, setTotalItemPrice] = useState(0);

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
        <p className="cart__total_price">
          €{Math.round(totalItemPrice * 100) / 100}
        </p>
      </div>
      <Button bordered color="warning" auto>
        Checkout
      </Button>
    </div>
  );
};

export default ShoppingCart;
