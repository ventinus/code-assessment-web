import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { Product, ProductItem } from '..'

let actions = {
  onAddToCartClicked: jest.fn()
}

const setup = product => {
  const component = shallow(
    <ProductItem product={product} {...actions} />
  )

  return {
    product: component.find(Product)
  }
}

let productProps

describe('ProductItem component', () => {
  beforeEach(() => {
    productProps = {
      title: 'Product 1',
      price: 9.99,
      inventory: 6,
    }
  })

  it('should render product', () => {
    const { product } = setup(productProps)
    expect(product.props()).toEqual({ title: 'Product 1', price: 9.99, inventory: 6, onAddToCartClicked: actions.onAddToCartClicked })
  })

  it('should match snapshot', () => {
    const tree = renderer
      .create(<ProductItem product={productProps} onAddToCartClicked={actions.onAddToCartClicked} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
