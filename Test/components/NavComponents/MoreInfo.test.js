import React from 'react'
import {shallow} from 'enzyme'

import SimpleExpansionPanel from '../../components/NavComponent/MoreInfo'

test('<MoreInfo />', () => {
  const expected = 'MoreInfo'
  const wrapper = shallow(<MoreInfo />)
  expect(wrapper.text()).toBe(expected)
})