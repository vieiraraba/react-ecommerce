import { Popover, Button, Text } from "@nextui-org/react";

import "./Navbar.css";
import ShoppingCart from "../Cart/ShoppingCart/ShoppingCart";


const Navbar = () => {
  return (
    <div className="navbar__container">

        <div className="navbar__container_logo">
            <img src="" alt="Logo" />
        </div>

        <div className="navbar__container_links">
        <span className="navbar__container_link
        ">DEMO</span>
        <span className="navbar__container_link
        ">SHOP</span>
        <span className="navbar__container_link
        ">PRODUCT</span>
        <span className="navbar__container_link
        ">PORTFOLIO</span>
        <span className="navbar__container_link
        ">LOOKBOK</span>
        <span className="navbar__container_link
        ">BLOG</span>
        </div>

        <div className="navbar__container_icons">
        <Popover>
      <Popover.Trigger>
        <Button auto flat>
            <img src={require("../../assets/icons/Buy.svg")}alt="icon" />
        </Button>
      </Popover.Trigger>
      <Popover.Content>
        <ShoppingCart />
      </Popover.Content>
    </Popover>
        </div>

    </div>
  )
}

export default Navbar