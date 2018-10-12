import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  checkout,
  toggleCartVisibility,
  addToCart,
  removeFromCart,
} from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import {
  Cart,
  Modal,
} from '../components'

const CartContainer = ({
  products,
  total,
  checkout,
  toggleCartVisibility,
  cartVisible,
  addToCart,
  removeFromCart,
  errorMessage,
  processingCheckout,
}) => (
  <Modal toggleModal={toggleCartVisibility} isOpen={cartVisible}>
    <Cart
      products={products}
      total={total}
      onAddToCartClicked={addToCart}
      onRemoveFromCartClicked={removeFromCart}
      onCheckoutClicked={() => checkout(products)}
      errorMessage={errorMessage}
      processingCheckout={processingCheckout} />
  </Modal>
)

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.number,
  checkout: PropTypes.func.isRequired,
  toggleCartVisibility: PropTypes.func.isRequired,
  cartVisible: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  processingCheckout: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: parseFloat(getTotal(state)),
  cartVisible: state.cart.visible,
  errorMessage: state.cart.error.message,
  processingCheckout: state.cart.processing,
})

export default connect(
  mapStateToProps,
  {
    checkout,
    toggleCartVisibility,
    addToCart,
    removeFromCart,
  }
)(CartContainer)
