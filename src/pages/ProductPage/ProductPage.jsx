import Navbar from "../../components/Header/Navbar/Navbar";
import Footer from "../../components/BottomSection/Footer/Footer";
import React from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products.json";

function ProductPage() {
  const { id: productId } = useParams();
  const { image, price, title } = products.find(
    (e) => e.id === parseInt(productId)
  );
  return (
    <>
      <Navbar />
      <div className="">
        <img
          src={image}
          alt="Product Img"
          className="product__container_image"
        />
        <div>
          <p>{price}</p>
        </div>
        <div>
          <p>{title}</p>
        </div>
        <button>Add to Cart</button>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
