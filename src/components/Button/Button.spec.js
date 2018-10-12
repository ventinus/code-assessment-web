import React from 'react'
import { mount } from 'enzyme'
import {
  PrimaryButton,
  SecondaryButton,
  SecondaryAltButton,
  DecButton,
  IncButton
} from '.'

const buttons = [
  PrimaryButton,
  SecondaryButton,
  SecondaryAltButton,
  DecButton,
  IncButton
]

const setup = (Comp, props) => {
  const component = mount(<Comp {...props}>Button Text</Comp>)

  return {
    component,
    button: component.find('button'),
  }
}

let fn

describe('Button components', () => {
  beforeEach(() => {
    fn = jest.fn()
  })

  buttons.forEach(btn => {
    it('passes children as text', () => {
      const {component} = setup(btn, {onClick: fn})
      expect(component.text()).toBe('Button Text')
    })

    it('sets up onClick callbacks', () => {
      const {button} = setup(btn, {onClick: fn})
      button.simulate('click')
      expect(fn).toHaveBeenCalled()
    })

    it('prevents onClick when disabled', () => {
      const {button} = setup(btn, {onClick: fn, disabled: true})
      button.simulate('click')
      expect(fn).not.toHaveBeenCalled()
    })
  })
})
