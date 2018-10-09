import React from 'react'

import {
  Link,
  CartIcon
} from '../../components'

import './CartHeader.css'

const CartHeader = (props) => {
  return (
    <div className="cart-header">
      <h1 className="type--a1">Acme Store</h1>
      <Link onClick={() => console.log('TODO')}>
        <CartIcon style={{marginRight: 8}} />
        Your cart is empty
      </Link>
    </div>
  )
}

export default CartHeader
