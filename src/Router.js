/* Importing the BrowserRouter, Routes, and Route components from the react-router-dom package. It is
also importing the Login component from the Login.jsx file. */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Navbar from "./components/Navbar/Navbar";

/**
 * The Router function returns a BrowserRouter component that contains two Routes components, one for
 * the Navbar and one for the Login component.
 * @returns A function that returns a JSX element.
 */
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
