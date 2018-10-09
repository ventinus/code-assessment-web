import React from 'react'
import { capitalize } from '../../helpers'

import './BorderSection.css'

export default ({ tag='div', side = 'bottom', className, children }) => (
  React.createElement(tag, {
    style: {
      [`border${capitalize(side)}Width`]: 1
    },
    className: `border-section ${className ? className : ''}`
  }, children)
)
