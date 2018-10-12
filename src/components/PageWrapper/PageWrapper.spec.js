import React from 'react'
import renderer from 'react-test-renderer'
import PageWrapper from '.'

describe('PageWrapper component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<PageWrapper>children</PageWrapper>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
