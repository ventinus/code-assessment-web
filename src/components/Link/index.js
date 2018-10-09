import React from 'react'
// import {Link as RouterLink} from 'react-router-dom'

import {hasPresence} from '../../helpers'

import './Link.css'

const RouterLink = ({ to, ...props }) => <a href={to} {...props} />

// if routes were needed, this component would handle which to use to link to the path
export default ({ to, href, className, ...props }) => {
  const allProps = {
    ...props,
    className: `link type--a8 ${className ? className : ''}`
  }

  return hasPresence(to) ? (
    <RouterLink to={to} {...allProps} />
  ) : (
    <a href={href} {...allProps} />
  )
}
