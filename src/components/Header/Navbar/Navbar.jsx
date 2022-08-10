/* Importing the ShoppingCart component from the ShoppingCart.js file. */
import ShoppingCart from "../../Cart/ShoppingCart/ShoppingCart";

/* Importing the Login component from the Login.js file. */
import Login from "../../Header/Login/Login";

/* Importing the css file for the Navbar component. */
import "./Navbar.css";

/* Importing the Popover and Button components from the @nextui-org/react package. */
import { Popover, Button, User } from "@nextui-org/react";

/* Importing the shopping bag icon from the react-icons package. */
import { FaShoppingBasket, FaSkullCrossbones } from "react-icons/fa";

/* Importing the Wishlist component from the Wishlist.js file. */
import Wishlist from "../../Cart/Wishlist/Wishlist";

import { useContext } from "react";

import { UserDataContext } from "../../../contexts/UserDataContext";

import useRegisterAuth from "../../../hooks/useRegisterAuth";

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
    /* Creating a navbar with links. */
    <div className="navbar__container">
      <div className="navbar__container_logo">Logo</div>
      <div className="navbar__container_links">
        <span className="navbar__container_link" href="/home">
          HOME
        </span>
        <span className="navbar__container_link">SHOP</span>
        <span className="navbar__container_link">PORTFOLIO</span>
        <span className="navbar__container_link">LOOKBOK</span>
        <span className="navbar__container_link">BLOG</span>
      </div>

      {/* Creating a popover that will display the shopping cart when the user clicks on the cart
      button. */}
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
                Login
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

        <Popover>
          <Popover.Trigger>
            <Button className="btn" auto ghost>
              <FaShoppingBasket className="icon" size="1.5rem" />
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
              <FaSkullCrossbones className="icon" size="1.5rem" />
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
      </div>
    </div>
  );
};

export default Navbar;
