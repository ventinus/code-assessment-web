import React from 'react'

import './Icon.css'

export const CartIcon = ({ size = 15, className = '' }) =>
  <i className={`icon icon--cart icon--${size} ${className}`}></i>