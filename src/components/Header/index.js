import React from 'react'
import PropTypes from 'prop-types'

import { BorderSection } from '..'

import './Header.css'

const Header = ({ heading, children }) => (
  <BorderSection className="header">
    <h1 className="type--a1">{heading}</h1>
    {children}
  </BorderSection>
)

Header.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.any
}

export default Header
