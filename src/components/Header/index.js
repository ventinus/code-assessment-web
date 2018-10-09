import React from 'react'

import { BorderSection } from '..'

import './Header.css'

export default ({ heading, children }) => (
  <BorderSection className="header">
    <h1 className="type--a1">{heading}</h1>
    {children}
  </BorderSection>
)
