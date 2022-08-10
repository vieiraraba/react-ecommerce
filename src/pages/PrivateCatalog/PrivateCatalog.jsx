import React from "react";
import Navbar from "../../components/Header/Navbar/Navbar";
import Footer from "../../components/BottomSection/Footer/Footer";
import { useState } from "react";
import products  from "../../data/products.json";
import { Outlet, Link } from "react-router-dom";
import "./PrivateCatalog.css";

const initialStorage = JSON.parse(localStorage.getItem("saveCache")) || [];
const wishlistStorage = JSON.parse(localStorage.getItem("saveWishCache")) || [];

function PrivateCatalog() {
  const [shoppingCart, setShoppingCart] = useState(initialStorage);
  const [wishlistCart, setWishlistCart] = useState(wishlistStorage);
  return (
    <>
      <Navbar
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
        wishlistCart={wishlistCart}
        setWishlistCart={setWishlistCart}
      />
      <div className="catalogs__container">
        {products.map(({ id, name, title, description, image }) => {
          return (
            <div className="catalogs__product_container">
              <div className="catalogs__product_info">
                <span>
                  <Link to={`/product/${id}`} key={id}>
                    <img
                      src={image}
                      alt="Product Img"
                      className="catalogs__product_container_image"
                    />
                  </Link>
                </span>
                <div className="catalogs__product_description">
                  <div>
                    <h1>{title}</h1>
                    <h3>{description}</h3>
                  </div>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
      <Outlet />
    </>
  );
}

export default PrivateCatalog;
