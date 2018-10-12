import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { Cart, CartProduct, PrimaryButton } from '..'

const productFactory = (id, title = 'Title', price = 10, quantity = 2, inventory = 4) => ({
  id,
  title,
  price,
  quantity,
  inventory,
})

let actions
const setup = (total, products = []) => {
  actions = {
    onCheckoutClicked: jest.fn(),
  }

  const component = shallow(
    <Cart products={products} total={total} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    button: component.find('.cart__checkout-btn'),
    products: component.find(CartProduct),
    em: component.find('em'),
    total: component.find('.cart__breakdown__value').get(0),
  }
}

describe('Cart component', () => {
  it('renders correctly with no products', () => {
    const tree = renderer
      .create(<Cart products={[]} total={0} {...actions} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should display add some products message', () => {
    const { em } = setup()
    expect(em.text()).toMatch(/^Please add some products to your cart./)
  })

  it('should not render checkout button when no products selected', () => {
    const { component } = setup()
    expect(component.exists('.cart__checkout-btn')).toEqual(false)
  })

  describe('when given product', () => {
    const product = [
      productFactory(1, 'Product 1'),
      productFactory(2, 'Product 2'),
      productFactory(3, 'Product 3'),
    ]

    it('renders correctly with products', () => {
      const tree = renderer
        .create(<Cart products={product} total={76} {...actions} />)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('should render products', () => {
      const { products } = setup(9.99, product)
      const props = product[0]

      expect(products).toHaveLength(3)
      expect(products.get(0).props).toEqual(props)
    })

    it('should display total', () => {
      const { total } = setup(76, product)
      expect(total.props.children).toMatch(/^\$76.00/)
    })

    it('should render checkout button', () => {
      const { button } = setup(9.99, product)
      expect(button.exists()).toEqual(true)
    })

    it('should call action on button click', () => {
      const { button, actions } = setup(9.99, product)
      button.simulate('click')
      expect(actions.onCheckoutClicked).toBeCalled()
    })
  })
})
