/* Importing the useEffect and useState hooks from the React library. */
import { useEffect, useState } from "react";

/* Importing the UserDataContextProvider from the WishlistContext.js file. */
import { UserDataContextProvider } from "./contexts/UserDataContext";

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

import toast, { Toaster } from "react-hot-toast";

/* Importing the App.css file. */
import "./App.css";

/* Setting the initial state of the shopping cart to the local storage. */
const initialStorage = JSON.parse(localStorage.getItem("saveCache")) || [];
const wishlistStorage = JSON.parse(localStorage.getItem("saveWishCache")) || [];

/**
 * The App function returns a div with a className of main__app, which contains the Navbar and Catalog
 * components. It also returns a div with the FreeShippingMin component.
 * @returns The Navbar, Catalog, and FreeShippingMin components.
 */
/* Setting the initial state of the shopping cart to the local storage. */
function App() {
  const [shoppingCart, setShoppingCart] = useState(initialStorage);
  const [wishlistCart, setWishlistCart] = useState(wishlistStorage);
  /**
   * If the error parameter is true, return an error toast, otherwise return a success toast.
   * @param message - The message you want to display
   * @param [error=false] - boolean
   * @returns The function is being returned.
   */
  const notifyToast = (message, error = false) => {
    if (error) return toast.error(message);
    toast.success(message);
  };

  /* Saving the shopping cart to the local storage. */
  useEffect(() => {
    localStorage.setItem("saveCache", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  /* Saving the wishlistCart to the local storage. */
  useEffect(() => {
    localStorage.setItem("saveWishCache", JSON.stringify(wishlistCart));
  }, [wishlistCart]);

  return (
    <>
      <div className="main__app">
        <UserDataContextProvider>
          <Navbar
            shoppingCart={shoppingCart}
            setShoppingCart={setShoppingCart}
            wishlistCart={wishlistCart}
            setWishlistCart={setWishlistCart}
            notifyToast={notifyToast}
          />
          <Catalog
            shoppingCart={shoppingCart}
            setShoppingCart={setShoppingCart}
            wishlistCart={wishlistCart}
            setWishlistCart={setWishlistCart}
          />
        </UserDataContextProvider>
        <FreeShippingMin />
        <Features />
        <Footer />
        <Toaster position="top-center" reverseOrder={true} />
      </div>
    </>
  );
}

export default App;
