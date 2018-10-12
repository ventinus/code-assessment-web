import React from 'react'
import renderer from 'react-test-renderer'
import Header from '.'

describe('Header component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Header heading="The Heading">children</Header>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
