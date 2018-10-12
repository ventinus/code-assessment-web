import React from 'react'
import PropTypes from 'prop-types'

import './Icon.css'

export const CartIcon = ({ size = 15, className = '', ...props }) =>
  <i className={`icon icon--cart icon--${size} ${className}`} {...props}></i>

export const EmptyCartIcon = () => <CartIcon className="icon--empty-cart" />

const iconProps = {
  size: PropTypes.number,
  className: PropTypes.string,
}

CartIcon.propTypes = iconProps
