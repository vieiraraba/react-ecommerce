/* Importing the css file for the component. */
import "./FreeShippingMin.css";

/* Importing the shopping cart icon from the react-icons library. */
import{FaShoppingBag} from "react-icons/fa";

/**
 * It returns a div with a className of freeShipping__container, which contains a div with a
 * FontAwesome icon and a span with some text.
 * @returns A React component.
 */
const FreeShippingMin = () => {
  return (
    <div className="freeShipping__container">
        <span> <FaShoppingBag size='6rem' color='black'/> </span>
        <span>FREE SHIPPING ON ANY ORDER ABOVE 50$</span>
    </div>
    
  )
}


export default FreeShippingMin;

