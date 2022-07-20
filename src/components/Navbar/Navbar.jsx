/* Importing the css file for the Navbar component. */
import "./Navbar.css";

/* Importing the Popover and Button components from the @nextui-org/react package. */
import { Popover, Button, User } from "@nextui-org/react";

/* Importing the shopping bag icon from the react-icons package. */
import {FaShoppingBasket, FaSkullCrossbones} from "react-icons/fa";

/* Importing the ShoppingCart component from the ShoppingCart.js file. */
import ShoppingCart from "../Cart/ShoppingCart/ShoppingCart";

/* Importing the Wishlist component from the Wishlist.js file. */
import Wishlist from "../Cart/Wishlist/Wishlist";

import { UserTwitterCard } from "../Avatar/Avatar";



const Navbar = ({ shoppingCart, setShoppingCart, wishlistCart ,setWishlistCart }) => {
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
      <div div className="navbar__container_icons">
      <Popover>
					<Popover.Trigger>
						<User
							as='button'
							src='https://img.seadn.io/files/0c1876d30fd1f424c2b52f4c844c0992.png?auto=format&fit=max&w=384'
							name='Ricardo Vieira'
							description='Hola,'
						/>
					</Popover.Trigger>
					<Popover.Content css={{ px: "$4", py: "$2" }}>
						<UserTwitterCard />
					</Popover.Content>
				</Popover>


        <Popover>
          <Popover.Trigger>
            <Button className="btn" auto ghost>
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

        <Popover>
          <Popover.Trigger>
            <Button className="btn" auto ghost>
              <FaSkullCrossbones size='5.5rem' />
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
