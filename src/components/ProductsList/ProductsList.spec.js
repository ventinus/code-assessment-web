import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import ProductsList from '.'

const setup = props => {
  const component = shallow(
    <ProductsList>{props.children}</ProductsList>
  )

  return {
    component: component,
    children: component.children().at(0),
  }
}

describe('ProductsList component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ProductsList>Test Children</ProductsList>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render children', () => {
    const { children } = setup({ children: 'Test Children' })
    expect(children.text()).toMatch(/^Test Children$/)
  })
})
