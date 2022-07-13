import "./App.css";

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar/Navbar";
import Catalog from "./components/Store/Catalog/Catalog";
import Router from "./Router";
import FreeShippingMin from "./components/FreeShippingMin/FreeShippingMin";



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
    </>
  );
}

export default App;
