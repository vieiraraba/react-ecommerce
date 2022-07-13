import { dblClick } from "@testing-library/user-event/dist/click";
import { useEffect, useState } from "react";
import Product from "../Product/Product";

import "./Catalog.css";

const Catalog = ({ shoppingCart, setShoppingCart }) => {
  const [products, setSaveProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3001/products");
      const data = await response.json();
      setSaveProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="catalog__container">
      {products.map(({ id, title, price, image }) => {
        return (
          <Product
            key={id}
            title={title}
            price={price}
            image={image}
            shoppingCart={shoppingCart}
            setShoppingCart={setShoppingCart}
          />
        );
      })}
    </div>
  );
};

export default Catalog;