import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import CartProduct from '.'
import {
  DecButton,
  IncButton
} from '..'

const DEFAULT_PROPS = {
  id: 1,
  title: 'Cart Product',
  price: 10,
  quantity: 5,
  inventory: 2,
}

const setup = (props = {}) => {
  const actions = {
    onAddToCartClicked: jest.fn(),
    onRemoveFromCartClicked: jest.fn(),
  }

  const component = mount(
    <CartProduct
      {...Object.assign({}, DEFAULT_PROPS, props)}
      {...actions}
    />
  )

  return {
    actions,
    removeBtn: component.find('button').at(0),
    decBtn: component.find(DecButton),
    incBtn: component.find(IncButton),
  }
}

describe('CartProduct component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<CartProduct>children</CartProduct>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should call onRemoveFromCartClicked with the id and quantity', () => {
    const { removeBtn, actions } = setup()
    removeBtn.simulate('click')
    expect(actions.onRemoveFromCartClicked).toHaveBeenCalledWith(1, 5)
  })

  it('should call onRemoveFromCartClicked with the id', () => {
    const { decBtn, actions } = setup()
    decBtn.simulate('click')
    expect(actions.onRemoveFromCartClicked).toHaveBeenCalledWith(1)
  })

  it('should call onAddToCartClicked with the id', () => {
    const { incBtn, actions } = setup()
    incBtn.simulate('click')
    expect(actions.onAddToCartClicked).toHaveBeenCalledWith(1)
  })

  describe('with no inventory', () => {
    it('should not call onAddToCartClicked', () => {
      const { incBtn, actions } = setup({inventory: 0})
      incBtn.simulate('click')
      expect(actions.onAddToCartClicked).not.toHaveBeenCalled()
    })
  })
})
