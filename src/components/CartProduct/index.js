import React from 'react'
import PropTypes from 'prop-types'

import {
  DecButton,
  IncButton,
} from '..'

import { toMoney } from '../../helpers'

import './CartProduct.css'

const CartProduct = ({
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
      <DecButton onClick={() => onRemoveFromCartClicked(id)} >
        Remove one item from the cart
      </DecButton>
      <span className="cart-product__quantity__value type--a8">{quantity}</span>
      <IncButton onClick={() => onAddToCartClicked(id)} disabled={inventory <= 0} >
        Add one item to cart
      </IncButton>
    </div>
  </li>
)

CartProduct.propTypes = {
  img: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  currency: PropTypes.string,
  quantity: PropTypes.number,
  inventory: PropTypes.number,
  onAddToCartClicked: PropTypes.func,
  onRemoveFromCartClicked: PropTypes.func,
}

export default CartProduct
