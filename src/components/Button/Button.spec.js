import React from 'react'
import renderer from 'react-test-renderer'
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

  buttons.forEach(Btn => {
    it(`renders correctly ${Btn.name}`, () => {
      const tree = renderer
        .create(<Btn onClick={jest.fn()}>children</Btn>)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })

    it(`passes children as text ${Btn.name}`, () => {
      const { component } = setup(Btn, {onClick: fn})
      expect(component.text()).toBe('Button Text')
    })

    it(`sets up onClick callbacks ${Btn.name}`, () => {
      const { button } = setup(Btn, {onClick: fn})
      button.simulate('click')
      expect(fn).toHaveBeenCalled()
    })

    it(`prevents onClick when disabled ${Btn.name}`, () => {
      const { button } = setup(Btn, {onClick: fn, disabled: true})
      button.simulate('click')
      expect(fn).not.toHaveBeenCalled()
    })
  })
})
