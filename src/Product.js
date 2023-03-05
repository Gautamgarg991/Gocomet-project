import React from 'react';
import "./Product.css";

function Product(props) {
  return (
    <div className='product'>
      <img className='product__image' src={props.image}/>
      <div className='product__info'>
        <p>{props.title}</p>
        <p className='product_price'>
            <strong>Rs.{props.price}</strong>
        </p>
        <div className='product__rating'>
            {Array(props.rating)
            .fill()
            .map((_) =>(
                <p>⭐</p>
            ))}
        </div>
        <button>Add to Bag</button>
      </div>
    </div>
  )
}

export default Product;
