import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import Product from '.'

const productFactory = (
  price = 9.99,
  inventory = 6,
  title = 'Test Product',
) => ({
  price,
  inventory,
  title,
})

const setup = (props = productFactory()) => {
  const actions = {
    onAddToCartClicked: jest.fn(),
  }

  const component = mount(
    <Product {...props} {...actions} />
  )

  return {
    actions,
    component: component,
    button: component.find('button'),
    inventory: component.find('.product__body__inventory'),
  }
}

describe('Product component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Product {...productFactory()} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  describe('when given inventory', () => {
    it('should render inventory count', () => {
      const { inventory } = setup()
      expect(inventory.text()).toMatch(/^6 remaining/)
    })

    it('should trigger onAddToCartClicked', () => {
      const { button, actions } = setup()
      button.simulate('click')
      expect(actions.onAddToCartClicked).toBeCalled()
    })

    it('should render "Add to cart" in button', () => {
      const { button } = setup()
      expect(button.text()).toMatch(/^Add to cart/)
    })
  })

  describe('when given no inventory', () => {
    it('should not trigger onAddToCartClicked', () => {
      const { button, actions } = setup(productFactory(10, 0))
      button.simulate('click')
      expect(actions.onAddToCartClicked).not.toBeCalled()
    })

    it('should render "Sold Out" in button', () => {
      const { button } = setup(productFactory(10, 0))
      expect(button.text()).toMatch(/^Sold Out/)
    })

    it('should render no inventory', () => {
      const { inventory } = setup(productFactory(10, 0))
      expect(inventory.text()).toMatch(/^None remaining/)
    })
  })
})
