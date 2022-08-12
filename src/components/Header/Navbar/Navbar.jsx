import ShoppingCart from "../../Cart/ShoppingCart/ShoppingCart";
import Wishlist from "../../Cart/Wishlist/Wishlist";
import Login from "../../Header/Login/Login";
import useRegisterAuth from "../../../hooks/useRegisterAuth";

import "./Navbar.css";

import { IconContext } from "react-icons";
import { Popover, Button, User, Tooltip } from "@nextui-org/react";
import { FaUserNinja } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { BsBagCheck, BsHeart, BsSearch } from "react-icons/bs";
import { useContext } from "react";
import { UserDataContext } from "../../../contexts/UserDataContext";

import { Outlet, Link } from "react-router-dom";

const Navbar = ({
  shoppingCart,
  setShoppingCart,
  wishlistCart,
  setWishlistCart,
  notifyToast,
}) => {
  /* Destructuring the userCache and setUserCache from the UserDataContext. */
  const { userCache, setUserCache } = useContext(UserDataContext);
  const { signInWithGoogle } = useRegisterAuth();

  return (
    <>
      <div className="top-bar">
        <div>
          <p className="coupon"> GET 20% SALE WITH COUPONE CODE CGBNJKI25 </p>
        </div>
        <div className="social_network__container">
          <IconContext.Provider value={{ size: "4.5rem", color: "white" }}>
            <span>
              <AiOutlineInstagram />
            </span>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "4.5rem", color: "white" }}>
            <span>
              <AiOutlineGithub />
            </span>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "4.5rem", color: "white" }}>
            <span>
              <AiOutlineTwitter />
            </span>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "4.5rem", color: "white" }}>
            <span>
              <AiOutlineLinkedin />
            </span>
          </IconContext.Provider>
        </div>
      </div>
      <div className="navbar__container">
        <div className="navbar__container_logo"><img
          alt="logo"
          src="https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/08/LogoJason.png"
        ></img>
        </div>
        
        <div className="navbar__container_links">
          <Link to={`/`}>HOME</Link>
          <Link to={`/catalog`}>CATALOG</Link>
          <span className="navbar__container_link" >SHOP</span>
          <span className="navbar__container_link">PORTFOLIO</span>
          <span className="navbar__container_link">LOOKBOK</span>
          <span className="navbar__container_link">BLOG</span>
        </div>

        <div div className="navbar__container_icons">

          <Popover>
            <Popover.Trigger>
              {userCache?.username ? (
                <User
                  as="button"
                  src={userCache?.avatar}
                  name={userCache?.name ? userCache?.name : userCache.username}
                  description={userCache?.name ? userCache.username : ""}
                />
              ) : (
                <Button color="warning" light>
                  <IconContext.Provider
                    value={{ size: "4.5rem", color: "black" }}
                  >
                    <span>
                      <FaUserNinja />
                    </span>
                  </IconContext.Provider>
                </Button>
              )}
            </Popover.Trigger>

            <Popover.Content css={{ px: "$4", py: "$2" }}>
              <div>
                {!userCache?.username && (
                  <button
                    className="login-with-google-btn"
                    onClick={signInWithGoogle}
                  >
                    Sign in with Google
                  </button>
                )}
              </div>

              <Login userCache={userCache} setUserCache={setUserCache} />
            </Popover.Content>
          </Popover>


          <Tooltip content="Comming Soon" color="invert" placement="bottom">
            <Button auto color="invert">
              <IconContext.Provider value={{ size: "4.5rem", color: "black" }}>
                <span>
                  <BsSearch />
                </span>
              </IconContext.Provider>
            </Button>
          </Tooltip>


          <Popover>
            <Popover.Trigger>
              <Button className="btn" auto ghost>
                <IconContext.Provider
                  value={{ size: "4.5rem", color: "black" }}
                >
                  <span>
                    <BsBagCheck />
                  </span>
                </IconContext.Provider>
              </Button>
            </Popover.Trigger>

            <Popover.Content css={{ width: "max-content" }}>
              <ShoppingCart
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
                userCache={userCache}
                notifyToast={notifyToast}
              />
            </Popover.Content>
          </Popover>

          <Popover>
            <Popover.Trigger>
              <Button className="btn" auto ghost>
                <IconContext.Provider
                  value={{ size: "4.5rem", color: "black" }}
                >
                  <span>
                    <BsHeart />
                  </span>
                </IconContext.Provider>
              </Button>
            </Popover.Trigger>

            <Popover.Content css={{ width: "max-content" }}>
              <Wishlist
                wishlistCart={wishlistCart}
                setWishlistCart={setWishlistCart}
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
              />
            </Popover.Content>
          </Popover>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Navbar;
