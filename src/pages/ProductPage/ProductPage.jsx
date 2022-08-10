import React from "react";
import Navbar from "../../components/Header/Navbar/Navbar";
import Footer from "../../components/BottomSection/Footer/Footer";
import "./ProductPage.css";

function ProductPage() {
  return (
    <>
      <Navbar />
      <div className="product__info">
        <img src="" alt="" />
        <div className="product__description">
          <div>
            <h1>TITLE</h1>
            <h3>Description</h3>
          </div>
          <button>Add to Cart</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage

