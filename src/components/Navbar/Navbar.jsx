import { Popover, Button } from "@nextui-org/react";
import ShoppingCart from "../Cart/ShoppingCart/ShoppingCart";

import "./Navbar.css";

const Navbar = ({ shoppingCart, setShoppingCart }) => {
  return (
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
      <div className="navbar__container_icons">
        <Popover>
          <Popover.Trigger>
            <Button auto ghost>
              Cart
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
