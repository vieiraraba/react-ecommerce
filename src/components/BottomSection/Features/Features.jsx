import './Features.css';

import{FaReply, FaHeadset, FaCreditCard, FaShippingFast} from "react-icons/fa";
const Features = () => {
  return (
    <div className="features__container">
        <div className="firstFeature__container">
            <span><FaReply size="6rem"/></span>
            <h3>FREE RETURN</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, maiores aperiam labore deserunt</p>
        </div>

        <div className="secondFeature__container">
            <span><FaCreditCard size="6rem"/></span>
            <h3>SECURED PAYMENT</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, maiores aperiam labore deserunt</p>
        </div>

        <div className="thirdFeature__container">
            <span><FaHeadset size="6rem"/></span>
            <h3>CUSTOMER SUPPORT</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, maiores aperiam labore deserunt</p>
        </div>

        <div className="fourthFeature__container">
            <span><FaShippingFast size="6rem"/></span>
            <h3>FREE SHIPPING</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, maiores aperiam labore deserunt</p>
        </div>
    </div>
  )
}

export default Features;