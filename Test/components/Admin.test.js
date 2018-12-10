import React from 'react'
import {shallow} from 'enzyme'

import Admin from '../../components/Admin'


test('<Admin />', () => {
    const expected = 'ADMIN'
    const wrapper = shallow(<Admin />)
    expect(wrapper.text()).toBe(expected)
  })