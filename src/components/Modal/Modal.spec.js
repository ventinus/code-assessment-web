import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Modal from '.'

const setup = ( props = {} ) => {
  const toggleModal = jest.fn()

  const component = shallow(
    <Modal {...props} toggleModal={toggleModal}>Modal inside</Modal>
  )

  return {
    component,
    toggleModal,
    button: component.find('button'),
  }
}

describe('Modal component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Modal toggleModal={jest.fn()}>children</Modal>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should handle toggleModal', () => {
    const { button, toggleModal } = setup()
    button.simulate('click')
    expect(toggleModal).toHaveBeenCalled()
  })

  it('should not include is-open class', () => {
    const { component } = setup()
    expect(component.props().className).toBe('modal ')
  })

  describe('when open', () => {
    it('should include is-open class', () => {
      const { component } = setup({isOpen: true})
      expect(component.props().className).toBe('modal is-open')
    })
  })
})
