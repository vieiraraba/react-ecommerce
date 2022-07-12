import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import FreeShippingMin from "./components/FreeShippingMin/FreeShippingMin";

import "./App.css";

const initialShoppingCart =
  JSON.parse(localStorage.getItem("shoppingCart")) || [];

function App() {
  return (
    <>
      <div className="main__app">
        <Navbar />
      </div>
      <div>
        <FreeShippingMin />
      </div>
    </>
  );
}

export default App;
