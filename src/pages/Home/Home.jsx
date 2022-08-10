// -------------- Components --------------
import Navbar from "../../components/Header/Navbar/Navbar";
import Catalog from "../../components/Store/Catalog/Catalog";
import FreeShippingMin from "../../components/BottomSection/FreeShippingMin/FreeShippingMin";
import Features from "../../components/BottomSection/Features/Features";
import Footer from "../../components/BottomSection/Footer/Footer";
import { UserDataContext } from "../../contexts/UserDataContext";
//----------------------------------------------------------------

import { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Home.css";

const initialStorage = JSON.parse(localStorage.getItem("saveCache")) || [];
const wishlistStorage = JSON.parse(localStorage.getItem("saveWishCache")) || [];

const notifyToast = (message, error = false) => {
  if (error) return toast.error(message);
  toast.success(message);
};

const Home = () => {
  const [shoppingCart, setShoppingCart] = useState(initialStorage);
  const [wishlistCart, setWishlistCart] = useState(wishlistStorage);
  const { userCache } = useContext(UserDataContext);
  const paymentRedirection = useLocation();
  const navigator = useNavigate();

  useEffect(() => {
    localStorage.setItem("saveCache", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  useEffect(() => {
    localStorage.setItem("saveWishCache", JSON.stringify(wishlistCart));
  }, [wishlistCart]);

  useEffect(() => {
    if (paymentRedirection.pathname === "/cancel") {
      navigator("/");
      notifyToast("Process Cancelled!");
    } else if (paymentRedirection.pathname === "/success") {
      navigator("/");
      notifyToast(
        `${userCache.username} congratulations you payment process is done!`
      );
      setShoppingCart([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main__app">
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
        notifyToast={notifyToast}
      />
      <FreeShippingMin />
      <Features />
      <Footer />
      <Toaster position="top-left" reverseOrder={false} />
    </div>
  );
};

export default Home;
