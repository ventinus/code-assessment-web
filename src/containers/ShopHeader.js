import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCartItemsLength } from '../reducers'
import { toggleCartVisibility } from '../actions'

import {
  Link,
  CartIcon,
  Header,
} from '../components'

const ShopHeader = ({ productCount, toggleCartVisibility }) => {
  return (
    <Header heading="Acme Store">
      <Link onClick={toggleCartVisibility} disabled={productCount <= 0}>
        <CartIcon style={{marginRight: 8}} />
        {productCount ? `You have ${productCount} item${productCount > 1 ? 's' : ''}` : 'Your cart is empty'}
      </Link>
    </Header>
  )
}

ShopHeader.propTypes = {
  productCount: PropTypes.number.isRequired,
  toggleCartVisibility: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  productCount: getCartItemsLength(state),
})

export default connect(
  mapStateToProps,
  { toggleCartVisibility }
)(ShopHeader)
