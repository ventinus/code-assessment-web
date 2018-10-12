import React from 'react'
import PropTypes from 'prop-types'

import './Modal.css'

const Modal = ({ isOpen = false, toggleModal, children }) => (
  <div className={`modal ${isOpen ? 'is-open' : ''}`}>
    <div className="modal__inner">
      <button className="modal__inner__close" onClick={toggleModal}>
        <span className="is-visually-hidden">Close Modal</span>
      </button>
      {children}
    </div>
  </div>
)

Modal.propTypes = {
  isOpen: PropTypes.bool,
  toggleModal: PropTypes.func.isRequired,
  children: PropTypes.any,
}

export default Modal
