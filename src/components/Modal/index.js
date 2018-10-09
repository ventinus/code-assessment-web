import React from 'react'

import './Modal.css'

export default ({ isOpen = false, toggleModal, children }) => (
  <div className={`modal ${isOpen ? 'is-open' : ''}`}>
    <div className="modal__inner">
      <button className="modal__inner__close" onClick={toggleModal}>
        <span className="is-visually-hidden">Close Modal</span>
      </button>
      {children}
    </div>
  </div>
)
