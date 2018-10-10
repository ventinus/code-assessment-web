import React from 'react'
import { capitalize } from '../../helpers'

import './BorderSection.css'

export default ({ tag='div', side = 'bottom', style = {}, className, children }) => (
  React.createElement(tag, {
    style: {
      ...style,
      [`border${capitalize(side)}Width`]: 1
    },
    className: `border-section ${className ? className : ''}`
  }, children)
)
