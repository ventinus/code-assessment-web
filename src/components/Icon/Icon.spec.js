import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import * as icons from '.'

const components = Object.values(icons)

describe('Icon component', () => {
  components.forEach(Icon => {
    it(`renders ${Icon.name} correctly`, () => {
      const tree = renderer
        .create(<Icon />)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
