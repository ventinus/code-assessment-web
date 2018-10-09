import React from 'react'

import './Button.css'

export const Base = ({ onClick, children, type = 'button', className = '', disabled = false }) => (
  <button
    className={`button type--a8 ${disabled ? 'disabled' : ''} ${className}`}
    type={type}
    onClick={() => !disabled && onClick()}>
    {children}
  </button>
)

export const PrimaryButton = props => <Base className='button--primary' {...props} />
export const SecondaryButton = ({ className, ...props }) => <Base className={`button--secondary ${className ? className : ''}`} {...props} />
export const SecondaryAltButton = ({ className, ...props }) => <Base className={`button--secondary-alt ${className ? className : ''}`} {...props} />
export const DecButton = ({ children, ...props }) => (
  <SecondaryButton className="button--dec" {...props}>
    <span className="is-visually-hidden">{children}</span>
  </SecondaryButton>
)
export const IncButton = ({ children, ...props }) => (
  <SecondaryAltButton className="button--inc" {...props}>
    <span className="is-visually-hidden">{children}</span>
  </SecondaryAltButton>
)
