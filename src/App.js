/* Importing the useEffect and useState hooks from the React library. */
import { useEffect, useState } from "react";


/* Importing the Navbar, Catalog, Features and FreeShippingMin components. */
import Navbar from "./components/Navbar/Navbar";

/* Importing the Catalog component from the Catalog.js file. */
import Catalog from "./components/Store/Catalog/Catalog";

/* Importing the FreeShippingMin component from the FreeShippingMin.js file. */
import FreeShippingMin from "./components/FreeShippingMin/FreeShippingMin";

/* Importing the Features component from the Features.js file. */
import Features from "./components/Features/Features";

/* Importing the Footer component from the Footer.js file. */
import Footer from "./components/Footer/Footer";

/* Importing the App.css file. */
import "./App.css";


/* Setting the initial state of the shopping cart to the local storage. */
const initialStorage = JSON.parse(localStorage.getItem("saveCache")) || [];
const wishlistStorage = JSON.parse(localStorage.getItem("saveWishCache")) || [];
const userCacheStorage = JSON.parse(localStorage.getItem("userCache")) || {};

/**
 * The App function returns a div with a className of main__app, which contains the Navbar and Catalog
 * components. It also returns a div with the FreeShippingMin component.
 * @returns The Navbar, Catalog, and FreeShippingMin components.
 */
/* Setting the initial state of the shopping cart to the local storage. */
function App() {
  const [shoppingCart, setShoppingCart] = useState (initialStorage);
  const [wishlistCart, setWishlistCart] = useState(wishlistStorage);
  const [userCache, setUserCache] = useState(userCacheStorage);

  /* Saving the shopping cart to the local storage. */
  useEffect (() =>{
    localStorage.setItem("saveCache", JSON.stringify(shoppingCart));
  },[shoppingCart])

/* Saving the wishlistCart to the local storage. */
  useEffect (() =>{
    localStorage.setItem("saveWishCache", JSON.stringify(wishlistCart));
  },[wishlistCart])

/* Saving the userCache to the local storage. */
  useEffect(() => {
		localStorage.setItem("userCache", JSON.stringify(userCache));
	}, [userCache]);

  return (
    <>
      <div className="main__app">
        <Navbar shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} wishlistCart={wishlistCart}
				setWishlistCart={setWishlistCart} userCache={userCache}
				setUserCache={setUserCache}/>
        <Catalog shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} wishlistCart={wishlistCart}
				setWishlistCart={setWishlistCart}/>
        <FreeShippingMin />
        <Features />
        <Footer />
      </div>
    </>
  );
}

export default App;
