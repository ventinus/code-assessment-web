import React from 'react'

import {
  CartHeader,
  ProductsContainer,
  CartContainer,
} from '.'

import {
  PageWrapper,
} from '../components'

import '../scss/global.css'

export default () => (
  <PageWrapper>
    <CartHeader />
    <ProductsContainer />
    <CartContainer />
  </PageWrapper>
)
