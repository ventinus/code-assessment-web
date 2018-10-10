import React from 'react'

import {
  DecButton,
  IncButton,
} from '..'

import { toMoney } from '../../helpers'

import './CartProduct.css'

export default ({
  img = {},
  id,
  title,
  price,
  currency,
  quantity,
  inventory,
  onAddToCartClicked,
  onRemoveFromCartClicked,
}) => (
  <li className="cart-product">
    <div className="cart-product__info">
      <img src={img.src} alt={img.alt} />
      <div className="cart-product__info__details">
        <h2 className="type--a7">{title}</h2>
        <p className="type--a8" style={{marginTop: 5}}>{toMoney(price, currency)}</p>
        <button
          className="cart-product__info__details__remove-btn type--a8"
          type="button"
          onClick={() => onRemoveFromCartClicked(id, quantity)}>
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
