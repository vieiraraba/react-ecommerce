/* Importing the CSS file for the Product component. */
import "./Product.css";

/* Importing the useState and useEffect hooks from the react library. */
import { useState, useEffect } from "react";

/* Importing the Card, Col, Row, Button, and Text components from the NextUI library. */
import { Card, Col, Row, Button, Text } from "@nextui-org/react";

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
  menuState,
  setMenu,
}) => {
  /* A function that adds an item to the shopping cart. */

  const [itemAdded, setItemAdded] = useState(false);

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
    !result  && setItemAdded(false);
  }, [id, shoppingCart]);

  return (
    <Card css={{ w: "15%", h: "330px" }}>
      <Card.Header className="card__header" css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="black">
            New
          </Text>
          <Text h3 color="#CE7500" size={20} weight="bold">
            {title}
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
