import './Product.css';

import React from 'react'

const Product = ({title,price,description,image,amount}) => {
  return (
    <div className="product_container">

        <img className="product_container_img" src={image} alt="" />

        <p className="product_container_tittle">{title}</p>

        <span className="product_container_rating">{amount}⭐</span>

        <p className="product_container_description">{description}</p>

        <div className="product_container_button">

            <p className="product_container_price">{price}$</p>
            <button className="product_bottom_buttonAdd">+</button>

        </div>
    </div>
  )
}

export default Product
