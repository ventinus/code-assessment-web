import React from 'react'
import createFragment from 'react-addons-create-fragment'
import PropTypes from 'prop-types'
import {
  CartProduct,
  Header,
  EmptyCartIcon,
  BorderSection,
  PrimaryButton,
} from '..'

import { SALES_TAX } from '../../constants/settings'

import { toMoney } from '../../helpers'

import './Cart.css'

const Cart = props => {
  return (
    <div className="cart">
      <Header heading="Your Cart" />
      {props.products.length > 0
        ? cartProducts(props)
        : noProducts}
    </div>
  )
}

const cartProducts = ({
  products,
  total,
  onAddToCartClicked,
  onRemoveFromCartClicked,
  onRemoveAllFromCartClicked,
  onCheckoutClicked,
}) => createFragment({
  list: (
    <ul className="cart__products">
      {products.map(product =>
        <CartProduct
          {...product}
          onAddToCartClicked={onAddToCartClicked}
          onRemoveFromCartClicked={onRemoveFromCartClicked}
          onRemoveAllFromCartClicked={onRemoveAllFromCartClicked}
          key={product.id} />
      )}

    </ul>
  ),
  table: (
    <BorderSection tag="table" className="cart__breakdown type--a8" side="top" style={{marginBottom: 80}}>
      <tbody>
        <tr>
          <td className="cart__breakdown__label">Subtotal</td>
          <td className="cart__breakdown__value">{toMoney(total)}</td>
        </tr>
        <tr>
          <td className="cart__breakdown__label">Taxes</td>
          <td className="cart__breakdown__value">{toMoney(total * SALES_TAX)}</td>
        </tr>
        <BorderSection tag="tr" side="top">
          <td className="cart__breakdown__label">Total</td>
          <td className="cart__breakdown__value">{toMoney(total + total * SALES_TAX)}</td>
        </BorderSection>
      </tbody>
    </BorderSection>
  ),
  checkout: (
    <PrimaryButton className="cart__checkout-btn" onClick={onCheckoutClicked}>
      Checkout
    </PrimaryButton>
  ),
})


const noProducts = (
  <div className="cart__no-products">
    <EmptyCartIcon />
    <p className="cart__no-products__copy type--a6 type--block">Please add some products to your cart.</p>
  </div>
)

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.number,
  onCheckoutClicked: PropTypes.func
}

export default Cart
