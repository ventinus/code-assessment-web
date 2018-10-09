import React, {PureComponent} from 'react'
import { connect } from 'react-redux'

import {
  ShopHeader,
  ProductsContainer,
  CartContainer,
} from '.'

import {
  PageWrapper,
} from '../components'

import '../scss/global.css'

class App extends PureComponent {
  componentWillReceiveProps(nextProps) {
    const method = nextProps.cartVisible ? 'add' : 'remove'
    document.documentElement.classList[method]('no-scroll')
  }

  render() {
    return (
      <PageWrapper>
        <ShopHeader />
        <ProductsContainer />
        <CartContainer />
      </PageWrapper>
    )
  }
}

const mapStateToProps = state => ({
  cartVisible: state.cart.visible
})

export default connect(mapStateToProps)(App)
