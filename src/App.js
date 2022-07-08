import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { products } from "./data/products";

import Product from "./components/Product/Product";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

import "./App.css";

const initialShoppingCart =
  JSON.parse(localStorage.getItem("shoppingCart")) || [];

function App() {
  const [buyShoppingCart, setBuyShoppingCart] = useState(initialShoppingCart);
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(buyShoppingCart));
  }, [buyShoppingCart]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
    console.log("Algoo");
  };

  return (
    <div className="main__app">
      <div className="main__products">
        <h1 className="main__title">Keeanu Reeves</h1>
        <Button onClick={toggleDrawer("right", true)}>Open Menu</Button>
        <div className="products_list">
          {products.map((item, index) => {
            return (
              <Product
                key={index}
                id={index}
                title={item.title}
                description={item.description}
                valoration={item.valoration}
                price={item.price}
                image={item.image}
                cart={buyShoppingCart}
                setCart={setBuyShoppingCart}
                menuState={state}
                setMenu={setState}
              />
            );
          })}
        </div>
      </div>
      <Drawer
        className="test"
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {/* {list(anchor)} */}
        <h1>Shopping Cart</h1>
        <Divider />

        <ShoppingCart cart={buyShoppingCart} setCart={setBuyShoppingCart} />
      </Drawer>
    </div>
  );
}

export default App;