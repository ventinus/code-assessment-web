import React from 'react'
import PropTypes from 'prop-types'

import './Button.css'

const Base = ({ onClick, children, type = 'button', className = '', disabled = false }) => (
  <button
    className={`button type--a8 ${disabled ? 'disabled' : ''} ${className}`}
    type={type}
    disabled={disabled ? 'disabled' : ''}
    onClick={() => !disabled && onClick()}>
    {children}
  </button>
)

export const PrimaryButton = ({ className, ...props }) =>
  <Base className={`button--primary ${className ? className : ''}`} {...props} />

export const SecondaryButton = ({ className, ...props }) =>
  <Base className={`button--secondary ${className ? className : ''}`} {...props} />

export const SecondaryAltButton = ({ className, ...props }) =>
  <Base className={`button--secondary-alt ${className ? className : ''}`} {...props} />

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

const buttonPropTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
}

PrimaryButton.propTypes = buttonPropTypes
SecondaryButton.propTypes = buttonPropTypes
SecondaryAltButton.propTypes = buttonPropTypes
DecButton.propTypes = buttonPropTypes
IncButton.propTypes = buttonPropTypes
