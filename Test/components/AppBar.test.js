import React from 'react'
import {shallow} from 'enzyme'

import AppBar from '../../components/AppBar'

test('<AppBar />', () => {
    const expected = 'Getting started'
    const wrapper = shallow(<AppBar />)
    expect(wrapper.text()).toBe(expected)
  })