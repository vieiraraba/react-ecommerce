import "./Catalog.css";
import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Catalog = ({
  shoppingCart,
  setShoppingCart,
  wishlistCart,
  setWishlistCart,
}) => {
  const [products, setSaveProducts] = useState([]);
  const url = "http://localhost:3001/products";
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setSaveProducts(data);
    };
    fetchProducts();
  }, [url]);

  return (
    <div className="catalog__container">
      {products.map(({ id, title, price, image }) => {
        return (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            image={image}
            shoppingCart={shoppingCart}
            setShoppingCart={setShoppingCart}
            wishlistCart={wishlistCart}
            setWishlistCart={setWishlistCart}
          />
        );
      })}
    </div>
  );
};

export default Catalog;
