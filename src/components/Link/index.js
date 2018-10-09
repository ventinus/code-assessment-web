import React from 'react'
// import {Link as RouterLink} from 'react-router-dom'

import {hasPresence} from '../../helpers'

import './Link.css'

const RouterLink = ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>

// if routes were needed, this component would handle which to use to link to the path
export default ({ to, href, className, children, ...props }) => {
  const allProps = {
    ...props,
    className: `link type--a8 ${className ? className : ''}`
  }

  if (hasPresence(to)) {
    return <RouterLink to={to} {...allProps}>{children}</RouterLink>
  } else if (hasPresence(href)) {
    return <a href={href} {...allProps}>{children}</a>
  } else {
    return <button type="button" {...allProps}>{children}</button>
  }
}
