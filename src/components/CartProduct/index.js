import React from 'react'

import {
  DecButton,
  IncButton,
} from '..'

import './CartProduct.css'

const imageSrc = file => require(`../../assets/images/${file}`)

export default ({ title, price, quantity, src, onRemoveClick }) => (
  <li className="cart-product">
    <div className="cart-product__info">
      <img src={imageSrc(src)} />
      <div className="cart-product__info__details">
        <h2 className="type--a7">{title}</h2>
        <p className="type--a8" style={{marginTop: 5}}>&#36;{price}</p>
        <button className="cart-product__info__details__remove-btn type--a8" type="button" onClick={onRemoveClick}>
          Remove
        </button>
      </div>
    </div>
    <div className="cart-product__quantity">
      <DecButton />
      <span className="cart-product__quantity__value type--a8">{quantity}</span>
      <IncButton />
    </div>
  </li>
)
