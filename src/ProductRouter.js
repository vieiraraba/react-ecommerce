import Home from "./pages/Home/Home";
import ProductPage from "./pages/ProductPage/ProductPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function ProductRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/product" element={ProductPage} />
      </Routes>
    </Router>
  );
}

export default ProductRouter;
