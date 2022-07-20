/* Importing the CSS file for the Catalog component. */
import "./Catalog.css";

/* A library that allows you to simulate a double click on a product. */
import { dblClick } from "@testing-library/user-event/dist/click";


/* Importing the useEffect and useState hooks from the React library. */
import { useEffect, useState } from "react";

/* Importing the Product component from the Product folder. */
import Product from "../Product/Product";



const Catalog = ({ shoppingCart, setShoppingCart, wishlistCart, setWishlistCart }) => {
  const [products, setSaveProducts] = useState([]);
  const url = "http://localhost:3001/products";
  /* Fetching the products from the API and setting the state of the products. */
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setSaveProducts(data);
    };
    fetchProducts();
  }, [url]);

  return (
    /* Mapping the products array and returning a Product component for each product. */
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