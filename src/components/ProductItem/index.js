import React from 'react'
import PropTypes from 'prop-types'
import { Product } from '..'

import './ProductItem.css'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <li className='product-item'>
    <Product
      title={product.title}
      price={product.price}
      inventory={product.inventory}
      onAddToCartClicked={onAddToCartClicked} />
  </li>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
