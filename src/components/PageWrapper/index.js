import React from 'react'
import PropTypes from 'prop-types'

import './PageWrapper.css'

const PageWrapper = ({ children }) => <div className="page-wrapper">{children}</div>

PageWrapper.propTypes = {
  children: PropTypes.any
}

export default PageWrapper

