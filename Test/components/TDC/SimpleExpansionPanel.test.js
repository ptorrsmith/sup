import React from 'react'
import {shallow} from 'enzyme'

import SimpleExpansionPanel from '../../components/TDC/SimpleExpansionPanel'

test('<App />', () => {
  const expected = 'Getting started'
  const wrapper = shallow(<SimpleExpansionPanel />)
  expect(wrapper.text()).toBe(expected)
})