import React from 'react'
import PropTypes from 'prop-types'

import './ProductsList.css'

const ProductsList = ({ children }) => (
  <ul className='products-list'>
    {children}
  </ul>
)

ProductsList.propTypes = {
  children: PropTypes.node,
}

export default ProductsList
