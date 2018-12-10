import React from 'react'
import {shallow} from 'enzyme'

import HowToUse from '../../components/NavComponent/HowToUse'

test('<MoreInfo />', () => {
  const expected = 'Getting Started'
  const wrapper = shallow(<HowToUse />)
  expect(wrapper.text()).toBe(expected)
})