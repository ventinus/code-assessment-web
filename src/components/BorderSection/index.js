import React from 'react'
import PropTypes from 'prop-types'
import { capitalize } from '../../helpers'

import './BorderSection.css'

const BorderSection = ({ tag = 'div', side = 'bottom', style = {}, className, children }) => (
  React.createElement(tag, {
    style: {
      ...style,
      [`border${capitalize(side)}Width`]: 1
    },
    className: `border-section ${className ? className : ''}`
  }, children)
)

BorderSection.propTypes = {
  tag: PropTypes.string,
  side: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.any,
}

export default BorderSection
