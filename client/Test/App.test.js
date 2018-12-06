import React from 'react'
import {shallow} from 'enzyme'

import App from '../components/App'

test('<App />', () => {
  const expected = 'Is this React header in App working?'
  const wrapper = shallow(<App />)
  expect(wrapper.text()).toBe(expected)
})