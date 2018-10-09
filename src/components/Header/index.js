import React from 'react'

import './Header.css'

export default ({ heading, children }) => (
  <div className="header">
    <h1 className="type--a1">{heading}</h1>
    {children}
  </div>
)
