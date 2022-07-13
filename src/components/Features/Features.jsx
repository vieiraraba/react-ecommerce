import './Features.css';

import{FaReply} from "react-icons/fa";
import{FaHeadset} from "react-icons/fa";
import{FaCreditCard} from "react-icons/fa";
import{FaShippingFast} from "react-icons/fa";

const Features = () => {
  return (
    <div className="features__container">
        <div className="firstFeature__container">
            <div><FaReply size="6rem"/></div>
            <h3>FREE RETURN</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, maiores aperiam labore deserunt</p>
        </div>

        <div className="secondFeature__container">
            <div><FaCreditCard size="6rem"/></div>
            <h3>SECURED PAYMENT</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, maiores aperiam labore deserunt</p>
        </div>

        <div className="thirdFeature__container">
            <div><FaHeadset size="6rem"/></div>
            <h3>CUSTOMER SUPPORT</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, maiores aperiam labore deserunt</p>
        </div>

        <div className="fourthFeature__container">
            <div><FaShippingFast size="6rem"/></div>
            <h3>FREE SHIPPING</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, maiores aperiam labore deserunt</p>
        </div>
    </div>
  )
}

export default Features;