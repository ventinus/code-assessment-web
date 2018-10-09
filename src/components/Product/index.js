import React from 'react'
import PropTypes from 'prop-types'

import {
  PrimaryButton,
} from '..'

import img from '../../assets/images/chronograph.png'

import './Product.css'

const Product = ({ price, inventory, title, onAddToCartClicked }) => (
  <article className="product">
    <img src={img} alt="" className="product__img"/>
    <div className="product__body">
      <div className="product__body__info">
        <h2 className="type--a3">{title}</h2>
        <p className="type--a4">&#36;{price}</p>
      </div>
      <p className="product__body__inventory type--a9 type--grey-5">{inventory || 'None'} remaining</p>

      <PrimaryButton className="product__body__btn" onClick={onAddToCartClicked} disabled={!inventory}>
        {inventory > 0 ? 'Add to cart' : 'Sold Out'}
      </PrimaryButton>
    </div>
  </article>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
