import "./App.css";

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar/Navbar";
import Catalog from "./components/Store/Catalog/Catalog";
import Router from "./Router";
import FreeShippingMin from "./components/FreeShippingMin/FreeShippingMin";



const initialShoppingCart =
  JSON.parse(localStorage.getItem("shoppingCart")) || [];

function App() {
  return (
    <>
      <div className="main__app">
        <Navbar />
        <Catalog />
      </div>
      <div>
        <FreeShippingMin />
      </div>
    </>
  );
}

export default App;
