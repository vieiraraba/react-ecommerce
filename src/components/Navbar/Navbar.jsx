import "./Navbar.css";
import { Popover, Button, User } from "@nextui-org/react";
import { FaShoppingBasket, FaSkullCrossbones } from "react-icons/fa";
import ShoppingCart from "../Cart/ShoppingCart/ShoppingCart";
import Wishlist from "../Cart/Wishlist/Wishlist";
import { UserTwitterCard } from "../Avatar/Avatar";

const Navbar = ({
  shoppingCart,
  setShoppingCart,
  wishlistCart,
  setWishlistCart,
}) => {
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

      <div div className="navbar__container_icons">
        <Popover>
          <Popover.Trigger>
            <User
              as="button"
              src="https://img.seadn.io/files/0c1876d30fd1f424c2b52f4c844c0992.png?auto=format&fit=max&w=384"
              name="Ricardo Vieira"
              description="Hola,"
            />
          </Popover.Trigger>
          <Popover.Content css={{ px: "$4", py: "$2" }}>
            <UserTwitterCard />
          </Popover.Content>
        </Popover>

        <Popover>
          <Popover.Trigger>
            <Button className="btn" auto ghost>
              <FaShoppingBasket size="5.5rem" />
            </Button>
          </Popover.Trigger>
          <Popover.Content css={{ width: "max-content" }}>
            <ShoppingCart
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
            />
          </Popover.Content>
        </Popover>

        <Popover>
          <Popover.Trigger>
            <Button className="btn" auto ghost>
              <FaSkullCrossbones size="5.5rem" />
            </Button>
          </Popover.Trigger>
          <Popover.Content css={{ width: "max-content" }}>
            <Wishlist
              wishlistCart={wishlistCart}
              setWishlistCart={setWishlistCart}
            />
          </Popover.Content>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
