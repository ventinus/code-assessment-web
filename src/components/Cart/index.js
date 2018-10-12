import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {
  CartProduct,
  Header,
  EmptyCartIcon,
  BorderSection,
  PrimaryButton,
  ErrorMessage,
} from '..'

import {
  toMoney,
  addSalesTax
} from '../../helpers'

import './Cart.css'

const Cart = props => (
  <div className="cart">
    <Header heading="Your Cart" />
    <ErrorMessage style={{marginTop: 20}}>{props.errorMessage}</ErrorMessage>
    {props.products.length > 0
      ? cartProducts(props)
      : noProducts}
  </div>
)

const cartProducts = ({
  products,
  total,
  processingCheckout,
  onAddToCartClicked,
  onRemoveFromCartClicked,
  onRemoveAllFromCartClicked,
  onCheckoutClicked,
}) => (
  <Fragment>
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
    <BorderSection tag="table" className="cart__breakdown type--a8" side="top" style={{marginBottom: 80}}>
      <tbody>
        <tr>
          <td className="cart__breakdown__label">Subtotal</td>
          <td className="cart__breakdown__value">{toMoney(total)}</td>
        </tr>
        <tr>
          <td className="cart__breakdown__label">Taxes</td>
          <td className="cart__breakdown__value">{toMoney(addSalesTax(total).tax)}</td>
        </tr>
        <BorderSection tag="tr" side="top">
          <td className="cart__breakdown__label">Total</td>
          <td className="cart__breakdown__value">{toMoney(addSalesTax(total).total)}</td>
        </BorderSection>
      </tbody>
    </BorderSection>
    <PrimaryButton className="cart__checkout-btn" onClick={onCheckoutClicked} disabled={processingCheckout}>
      {processingCheckout ? 'Processing...' : 'Checkout'}
    </PrimaryButton>
  </Fragment>
)


const noProducts = (
  <div className="cart__no-products">
    <EmptyCartIcon />
    <em className="cart__no-products__copy type--a6 type--block">Please add some products to your cart.</em>
  </div>
)

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.number,
  errorMessage: PropTypes.string,
  processingCheckout: PropTypes.bool,
  onCheckoutClicked: PropTypes.func,
  onAddToCartClicked: PropTypes.func,
  onRemoveFromCartClicked: PropTypes.func,
  onRemoveAllFromCartClicked: PropTypes.func,
}

export default Cart
