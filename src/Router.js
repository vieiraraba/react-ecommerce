import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Navbar from "./components/Navbar/Navbar";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
      <Routes>
        <Route path="/Login" elemnt={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
