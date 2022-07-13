/* Importing the App.css file. */
import "./App.css";

/* Importing the useEffect and useState hooks from the React library. */
import { useEffect, useState } from "react";


/* Importing the Navbar, Catalog, Features and FreeShippingMin components. */
import Navbar from "./components/Navbar/Navbar";
import Catalog from "./components/Store/Catalog/Catalog";
import FreeShippingMin from "./components/FreeShippingMin/FreeShippingMin";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";



/* Setting the initial state of the shopping cart to the local storage. */
const initialShoppingCart =
  JSON.parse(localStorage.getItem("shoppingCart")) || [];

/**
 * The App function returns a div with a className of main__app, which contains the Navbar and Catalog
 * components. It also returns a div with the FreeShippingMin component.
 * @returns The Navbar, Catalog, and FreeShippingMin components.
 */
function App() {
  const [shoppingCart, setShoppingCart] = useState ([]);

  return (
    <>
      <div className="main__app">
        <Navbar shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
        <Catalog shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
      </div>
      <div>
        <FreeShippingMin />
      </div>
      <div>
        <Features />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
