import React from 'react'
import PropTypes from 'prop-types'
import {
  CartProduct,
  Header,
  EmptyCartIcon,
  BorderSection,
  PrimaryButton,
} from '..'

import './Cart.css'

const Cart = props => {
  return (
    <div className="cart">
      <Header heading="Your Cart" />
      {props.products.length > 0
        ? <CartProducts {...props} />
        : NoProducts}
    </div>
  )
}

const CartProducts = ({ products, total, onCheckoutClicked }) => (
  <div>
    {products.map(product =>
      <CartProduct
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )}

    <BorderSection tag="table" className="cart__breakdown type--a8" side="top">
      <tbody>
        <tr>
          <td className="cart__breakdown__label">Subtotal</td>
          <td className="cart__breakdown__value">&#36;1000</td>
        </tr>
        <tr>
          <td className="cart__breakdown__label">Taxes</td>
          <td className="cart__breakdown__value">&#36;10.40</td>
        </tr>
        <BorderSection tag="tr" side="top">
          <td className="cart__breakdown__label">Total</td>
          <td className="cart__breakdown__value">&#36;{total}</td>
        </BorderSection>
      </tbody>
    </BorderSection>

    <PrimaryButton className="cart__checkout-btn" onClick={onCheckoutClicked}>
      Checkout
    </PrimaryButton>
  </div>
)

const NoProducts = (
  <div className="cart__no-products">
    <EmptyCartIcon />
    <p className="cart__no-products__copy type--a6 type--block">Please add some products to your cart.</p>
  </div>
)

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
