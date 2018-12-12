import React from 'react'
import {shallow} from 'enzyme'

import Sidebar from '../../components/TDC/Sidebar'

test('<Sidebar />', () => {
  const expected = 'Sidebar'
  const wrapper = shallow(<Sidebar />)
  expect(wrapper.text()).toBe(expected)
})