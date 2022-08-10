import Navbar from "../../components/Header/Navbar/Navbar";
import Footer from "../../components/BottomSection/Footer/Footer";
import React from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products.json";
import "./ProductPage.css";

function ProductPage() {
  const { id: productId } = useParams();
  const { image, price, title, description } = products.find(
    (e) => e.id === parseInt(productId)
  );
  return (
    <>
      <Navbar />
      <div className="product__container">
        <div className="product__container_img">
        <img
          src={image}
          alt="Product Img"
          className="product__container_image"
          />
        </div>
        <div className="product__container_info">
          <h1>{title}</h1>
          <h3>{price}$</h3>
          <h3>{description}</h3>
        </div>
        <button className="product__button">Add to Cart</button>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
