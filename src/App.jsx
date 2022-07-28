import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Catalog from "./components/Store/Catalog/Catalog";
import FreeShippingMin from "./components/FreeShippingMin/FreeShippingMin";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";

const initialStorage = JSON.parse(localStorage.getItem("saveCache")) || [];

function App() {
  const [shoppingCart, setShoppingCart] = useState(initialStorage);
  const [wishlistCart, setWishlistCart] = useState([]);

  useEffect(() => {
    localStorage.setItem("saveCache", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  return (
    <>
      <div className="main__app">
        <Navbar
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
          wishlistCart={wishlistCart}
          setWishlistCart={setWishlistCart}
        />
        <Catalog
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
          wishlistCart={wishlistCart}
          setWishlistCart={setWishlistCart}
        />
        <FreeShippingMin />
        <Features />
        <Footer />
      </div>
    </>
  );
}

export default App;
