import './Product.css';

import React from 'react'

const Product = () => {
  return (
    <div className="product_container">
        <span className="product_discount">50%</span>
        <img className="product_container_img" src="https://media.composition.gallery/artworkpic/takashi-murakami-school-entrance-ceremony-mixed-media-available-for-sale-on-composition-gallery1646663068-64187.jpeg" alt="" />
        <p className="product_container_tittle">Takashi Murakami</p>
        <span className="product_container_rating">⭐⭐⭐⭐⭐</span>
        <p className="product_container_description">Description:</p>
        <div className="product_container_button">
            <p className="product_container_price">90$</p>
            <button className="product_bottom_buttonAdd">+</button>
        </div>
    </div>
  )
}

export default Product
