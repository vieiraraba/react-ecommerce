import './Features.css';

import{FaReply, FaCreditCard, FaShippingFast} from "react-icons/fa";
const Features = () => {
  return (
    <div className='features__container'>
			<div className='firstFeature__container'>
				<span className='services_icons'>
					<FaReply size='5rem' />
				</span>
				<div> 
					<h3 className='services_names'>FREE RETURNS</h3>
					<h3 className='services_names'>Easy & Free</h3>
					<p className='services_description' >From all Orders Over $100</p>
				</div>
				
				<p>

				</p>
			</div>

			<div className='secondFeature__container'>
				<span className='services_icons'>
					<FaCreditCard size='5rem' />
				</span>
				<div> 
					<h3 className='services_names'>SECURE PAYMENT</h3>
					<h3 className='services_names'>Fast & Safe</h3>
					<p className='services_description' >From all Orders Over $100</p>
				</div>
				<p>

				</p>
			</div>

			<div className='thirdFeature__container'>
				<span className='services_icons'>
					<FaShippingFast size='5rem' />
				</span>
				<div> 
					<h3 className='services_names'>FREE SHIPPING</h3>
					<h3 className='services_names'>Safe & Fast</h3>
					<p className='services_description' >From all Orders Over $100</p>
				</div>
				<p>

				</p>
			</div>


		</div>
  )
}

export default Features;