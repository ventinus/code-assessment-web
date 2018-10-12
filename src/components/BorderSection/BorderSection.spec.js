import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import BorderSection from '.'

const setup = props => shallow(<BorderSection {...props} />)

describe('BorderSection component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<BorderSection>children</BorderSection>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders the appropriate tag', () => {
    const component = setup({tag: 'li'})
    expect(component.name()).toBe('li')
  })

  it('renders the correct border style', () => {
    const component = setup({side: 'top'})
    expect(component.props().style).toEqual({borderTopWidth: 1})
  })

  it('renders the custom className as an addition', () => {
    const component = setup({className: 'special'})
    expect(component.props().className).toBe('border-section special')
  })
})
