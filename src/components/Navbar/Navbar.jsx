/* Importing the css file for the Navbar component. */
import "./Navbar.css";

/* Importing the Popover and Button components from the @nextui-org/react package. */
import { Popover, Button } from "@nextui-org/react";

/* Importing the shopping bag icon from the react-icons package. */
import{FaShoppingBasket} from "react-icons/fa";

/* Importing the ShoppingCart component from the ShoppingCart.js file. */
import ShoppingCart from "../Cart/ShoppingCart/ShoppingCart";



const Navbar = ({ shoppingCart, setShoppingCart }) => {
  return (
    /* Creating a navbar with links. */
    <div className="navbar__container">
      <div className="navbar__container_logo">Logo</div>
      <div className="navbar__container_links">
        <span className="navbar__container_link">DEMO</span>
        <span className="navbar__container_link">SHOP</span>
        <span className="navbar__container_link">PRODUCT</span>
        <span className="navbar__container_link">PORTFOLIO</span>
        <span className="navbar__container_link">LOOKBOK</span>
        <span className="navbar__container_link">BLOG</span>
      </div>
      
      {/* Creating a popover that will display the shopping cart when the user clicks on the cart
      button. */}
      <div className="navbar__container_icons">
        <Popover>
          <Popover.Trigger>
            <Button auto ghost>
              <FaShoppingBasket size='5.5rem' />
            </Button>
          </Popover.Trigger>
          <Popover.Content css={{ width: "max-content" }}>
            <ShoppingCart
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
