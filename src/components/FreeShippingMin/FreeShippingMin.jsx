import "./FreeShippingMin.css";
import { FiShoppingCart } from "react-icons/fi";

const FreeShippingMin = () => {
  return (
    <div className="freeShipping__container">
        <div><FiShoppingCart /></div>
        <span>FREE SHIPPING ON ANY ORDER ABOVE 50$</span>
    </div>
    
  )
}

export default FreeShippingMin