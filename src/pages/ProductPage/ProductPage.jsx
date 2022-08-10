import React from "react";
import Navbar from "../../components/Header/Navbar/Navbar";
import Footer from "../../components/BottomSection/Footer/Footer";
import { products } from "../../data/products";
import "./ProductPage.css";

function ProductPage() {
  console.log(products);
  return (
    <>
      <Navbar />
      <div className="product__contain=e">
        {/* {products.map(({ id, name, title, description }) => { */}
          {/* return ( */}
            <div className="product__info">
              <img src="https://i.etsystatic.com/26845207/r/il/a796c9/3709805451/il_794xN.3709805451_63jl.jpg" alt="Product Img" />
              <div className="product__description">
                <div>
                  <h1>title</h1>
                  <h3>description</h3>
                </div>
                <button>Add to Cart</button>
              </div>
            </div>
          {/* ); */}
        {/* })} */}
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
