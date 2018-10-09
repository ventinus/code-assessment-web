import React from 'react'
import { shallow } from 'enzyme'
import Link from '.'

const setup = props => {
  const component = shallow(<Link {...props}>Link Text</Link>)

  return {
    component,
  }
}

let fn

describe('Link component', () => {
  it('renders with router Link when to prop is present', () => {
    const {component} = setup({to: '/'})
    expect(component.name()).toBe('RouterLink')
    expect(component.prop('to')).toBe('/')
  })

  it('uses an anchor tag with href prop', () => {
    const {component} = setup({href: '/'})
    expect(component.prop('href')).toBe('/')
    expect(component.prop('to')).toBe(undefined)
  })
})
