import React from 'react'

import {
  DecButton,
  IncButton,
} from '..'

import { toMoney } from '../../helpers'

import './CartProduct.css'

const imageSrc = file => require(`../../assets/images/${file}`)

export default ({
  id,
  title,
  price,
  quantity,
  inventory,
  src,
  onAddToCartClicked,
  onRemoveFromCartClicked,
  onRemoveAllFromCartClicked,
}) => (
  <li className="cart-product">
    <div className="cart-product__info">
      <img src={imageSrc(src)} />
      <div className="cart-product__info__details">
        <h2 className="type--a7">{title}</h2>
        <p className="type--a8" style={{marginTop: 5}}>{toMoney(price)}</p>
        <button
          className="cart-product__info__details__remove-btn type--a8"
          type="button"
          onClick={() => onRemoveAllFromCartClicked(id)}>
          Remove
        </button>
      </div>
    </div>
    <div className="cart-product__quantity">
      <DecButton onClick={() => onRemoveFromCartClicked(id)} />
      <span className="cart-product__quantity__value type--a8">{quantity}</span>
      <IncButton onClick={() => onAddToCartClicked(id)} disabled={inventory <= 0} />
    </div>
  </li>
)
