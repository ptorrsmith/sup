import React from 'react'
import {shallow} from 'enzyme'

import About from '../../components/NavComponent/About'

test('<About />', () => {
  const expected = 'About'
  const wrapper = shallow(<About />)
  expect(wrapper.text()).toBe(expected)
})