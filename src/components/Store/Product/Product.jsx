import "./Product.css";
import { useState, useEffect } from "react";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

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
  };

  useEffect(() => {
    const result = wishlistCart.some((item) => {
      if (item.itemId === id) {
        return true;
      }
      return false;
    });
    result && setWishlistAdded(true);
    !result && setWishlistAdded(false);
  }, [id, wishlistCart]);

  return (
    <Card css={{ w: "15%", h: "330px" }}>
      <Card.Header
        className="card__header"
        css={{ position: "absolute", zIndex: 1, top: 5 }}
      >
        <Col className="col__header">
          <Text size={12} weight="bold" transform="uppercase" color="red">
            New
          </Text>
          <Text h3 color="black" size={25} weight="bold">
            {title}
            <Button
              className="wishlist__Btn"
              light
              color="error"
              onClick={addToWishlistCart}
              disabled={wishlistAdded}
            >
              {wishlistAdded ? (
                <AiFillHeart size="5rem" />
              ) : (
                <AiOutlineHeart size="5rem" />
              )}
            </Button>
          </Text>
        </Col>
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
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#ffffff66",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Text color="#000" size={12}>
              Available soon.
            </Text>
            <Text color="#000" size={20}>
              € {price}
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button color="warning" auto ghost disabled={itemAdded}>
                <Text
                  css={{ color: "black" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  onClick={addToCart}
                >
                  {itemAdded ? "Added" : "Shop Now"}
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default Product;
