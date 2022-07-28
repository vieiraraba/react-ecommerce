import "./FreeShippingMin.css";
import { FaShoppingBag } from "react-icons/fa";

const FreeShippingMin = () => {
  return (
    <div className="freeShipping__container">
      <span>
        {" "}
        <FaShoppingBag size="6rem" color="black" />{" "}
      </span>
      <span>FREE SHIPPING ON ANY ORDER ABOVE 50$</span>
    </div>
  );
};

export default FreeShippingMin;
