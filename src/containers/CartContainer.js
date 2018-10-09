import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  checkout,
  toggleCartVisibility,
  addToCart,
  removeFromCart,
  removeAllFromCart,
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
  removeAllFromCart,
}) => (
  <Modal toggleModal={toggleCartVisibility} isOpen={cartVisible}>
    <Cart
      products={products}
      total={total}
      onAddToCartClicked={addToCart}
      onRemoveFromCartClicked={removeFromCart}
      onRemoveAllFromCartClicked={removeAllFromCart}
      onCheckoutClicked={() => checkout(products)} />
  </Modal>
)

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired,
  toggleCartVisibility: PropTypes.func.isRequired,
  cartVisible: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state),
  cartVisible: state.cart.visible,
})

export default connect(
  mapStateToProps,
  {
    checkout,
    toggleCartVisibility,
    addToCart,
    removeFromCart,
    removeAllFromCart,
  }
)(CartContainer)
