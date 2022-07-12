import { useEffect, useState } from "react";
import Product from "../Product/Product";

import "./Catalog.css";

const Catalog = () => {
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
      {products.map(({id, title, price, image}) => {
        return <Product key={id} title={title} price={price} image={image} />;
      })}
    </div>
  );
};

export default Catalog;