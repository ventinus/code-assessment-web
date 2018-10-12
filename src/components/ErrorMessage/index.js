import React from 'react'
import PropTypes from 'prop-types'

import './ErrorMessage.css'

const ErrorMessage = ({ style = {}, children }) => {
  if (!children) return null

  return (
    <div className="error-message" style={style}>
      <p>There was an issue completing checkout: {children}</p>
    </div>
  )
}

ErrorMessage.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any,
}

export default ErrorMessage
