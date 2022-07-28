import "./CartItem.css";
import { Button } from "@nextui-org/react";

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
  wish,
}) => {
  const restQuantityItem = () => {
    if (itemQuantity === 1) return;
    shoppingCart.forEach((item) => {
      if (item.itemId === itemId) {
        item.itemQuantity -= 1;
      }
    });
    setShoppingCart([...shoppingCart]);
  };

  const addQuantityItem = () => {
    shoppingCart.forEach((item) => {
      if (item.itemId === itemId) {
        item.itemQuantity += 1;
      }
    });
    setShoppingCart([...shoppingCart]);
  };

  const itemRemove = () => {
    if (wish) {
      const newWishList = wishlistCart.filter(
        (wishItem) => wishItem.itemId !== itemId
      );
      setWishlistCart(newWishList);
    } else {
      const newCart = shoppingCart.filter((item) => item.itemId !== itemId);
      setShoppingCart(newCart);
    }
  };

  return (
    <div className="cart__item">
      <img className="cart__item_image" src={itemImage} alt="product" />
      <div>
        <p className="cart__item_title">{itemTitle}</p>
        <p className="cart__item_price">€ {itemPrice}</p>
        <div className="cart__item_bottom">
          {wish ? (
            <Button light color="error" auto>
              Add to Cart
            </Button>
          ) : (
            <>
              <Button light color="error" auto onClick={restQuantityItem}>
                -
              </Button>
              <p>{itemQuantity}</p>
              <Button light color="error" auto onClick={addQuantityItem}>
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
