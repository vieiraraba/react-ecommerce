/* Importing the CartItem component from the CartItem folder. */
import CartItem from "../CartItem/CartItem";

/* Importing the useState and useEffect hooks from the React library. */
import { useState, useEffect } from "react";

/* Importing the Button component from the @nextui-org/react library. */
import { Button, Tooltip } from "@nextui-org/react";

import "./Wishlist.css";

const Wishlist = ({
  wishlistCart,
  setWishlistCart,
  shoppingCart,
  setShoppingCart,
}) => {
  const [totalItemWishlist, setTotalItemWishlist] = useState(0);

  useEffect(() => {
    let totalOfWishlistArrayItems = wishlistCart.length;
    setTotalItemWishlist(totalOfWishlistArrayItems);
  }, [wishlistCart]);

  return (
    <div className="main__cart">
      <h3>Wishlist Cart</h3>
      <ul className="cart__list">
        {wishlistCart.length > 0 ? (
          wishlistCart.map(
            ({ itemId, itemTitle, itemPrice, itemImage, itemQuantity }) => {
              return (
                <CartItem
                  key={itemId}
                  itemId={itemId}
                  itemTitle={itemTitle}
                  itemPrice={itemPrice}
                  itemImage={itemImage}
                  itemQuantity={itemQuantity}
                  wishlistCart={wishlistCart}
                  setWishlistCart={setWishlistCart}
                  shoppingCart={shoppingCart}
                  setShoppingCart={setShoppingCart}
                  wish={true}
                />
              );
            }
          )
        ) : (
          <h1>No Love!</h1>
        )}
      </ul>
      <div className="cart__bottom">
        <Tooltip
          placement="bottom"
          content="Your Total Love List"
          color="warning"
        >
          <Button flat auto color="warning">
            {totalItemWishlist}
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};
export default Wishlist;
