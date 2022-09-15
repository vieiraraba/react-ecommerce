/* Importing the CSS file for the Product component. */
import "./Product.css";

/* Importing the useState and useEffect hooks from the react library. */
import { useState, useEffect } from "react";

/* Importing the Card, Col, Row, Button, and Text components from the NextUI library. */
import { Card, Col, Row, Button, Text } from "@nextui-org/react";

/* Importing the AiOutlineHeart and AiFillHeart icons from the react-icons/ai library. */
import { AiOutlineHeart, AiFillHeart, AiOutlineSearch } from "react-icons/ai";

import { Outlet, Link } from "react-router-dom";

/* A function that takes in a bunch of props and returns a react component. */
const Product = ({
  id,
  title,
  price,
  image,
  valoration,
  description,
  quantity,
  shoppingCart,
  setShoppingCart,
  wishlistCart,
  setWishlistCart,
  menuState,
  setMenu,
}) => {
  /* A function that adds an item to the shopping cart. */

  const [itemAdded, setItemAdded] = useState(false);
  const [wishlistAdded, setWishlistAdded] = useState(false);

  const addToCart = () => {
    setShoppingCart([
      ...shoppingCart,
      {
        itemId: id,
        itemTitle: title,
        itemPrice: price,
        itemImage: image,
        itemQuantity: 1,
      },
    ]);
    setItemAdded(true);
  };

  /* Checking if the item is already in the shopping cart. If it is, it sets the itemAdded state to true.
If it is not, it sets the itemAdded state to false. */
  useEffect(() => {
    const result = shoppingCart.some((item) => {
      if (item.itemId === id) {
        return true;
      }
      return false;
    });
    result && setItemAdded(true);
    !result && setItemAdded(false);
  }, [id, shoppingCart]);

  /**
   * When the user clicks the add to wishlist button, the item is added to the wishlist cart.
   */
  const addToWishlistCart = () => {
    setWishlistCart([
      ...wishlistCart,
      {
        itemId: id,
        itemTitle: title,
        itemPrice: price,
        itemImage: image,
        itemQuantity: 1,
      },
    ]);
    // setItemAdded(true);
  };
  /* Checking if the item is already in the wishlist cart. If it is, it sets the wishlistAdded state to
true.
If it is not, it sets the wishlistAdded state to false. */
  useEffect(() => {
    const result = wishlistCart.some((item) => {
      if (item.itemId === id) {
        return true;
      }
      return false;
    });
    /* Checking if the result is true, if it is, it sets the wishlistAdded state to true. */
    result && setWishlistAdded(true);
    !result && setWishlistAdded(false);
  }, [id, wishlistCart]);

  return (
    <Card css={{ w: "75%", h: "330px" }}>
      <Card.Header css={{ position: "absolute" }}>
        <Row justify="center" align="center">
          <Link to={`/productpage/${id}`}>
            <Button
              color="error"
              light
            >
              <AiOutlineSearch size="4.5rem" />
            </Button>
          </Link>
          <Button
            color="error"
            light
            onClick={addToWishlistCart}
            disabled={wishlistAdded}
          >
            {wishlistAdded ? (
              <AiFillHeart size="4.5rem" />
            ) : (
              <AiOutlineHeart size="4.5rem" />
            )}
          </Button>
        </Row>
      </Card.Header>

      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={image}
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Card example background"
        />
      </Card.Body>

      <Card.Footer
        css={{
          position: "absolute",
          background: "black",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row justify="center" align="center">
          <Col>
            <Text h3 color="#CE7500" size={20} weight="bold">
              {title}
            </Text>
            <Text color="#000" size={12}>
              Available Now
            </Text>
            <Text color="#000" size={20}>
              € {price}
            </Text>
          </Col>
          <Row>
            <Row justify="flex-end">
              <button className="shop_Now" color="warning" auto ghost disabled={itemAdded}>
                <Text
                  css={{ color: "black" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  onClick={addToCart}
                >
                  {itemAdded ? "Added" : "Shop Now"}
                </Text>
              </button>
            </Row>
          </Row>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default Product;
