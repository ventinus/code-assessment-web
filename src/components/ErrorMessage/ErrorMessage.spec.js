import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import ErrorMessage from '.'

describe('ErrorMessage component', () => {
  it('renders correctly with an error message', () => {
    const tree = renderer
      .create(<ErrorMessage>There was an error</ErrorMessage>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('does not render without children present', () => {
    const component = shallow(<ErrorMessage></ErrorMessage>)
    expect(component.get(0)).toBe(null)
  })
})
