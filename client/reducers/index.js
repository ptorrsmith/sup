import { combineReducers } from 'redux'

import providers from './providers'
import currentService from './currentService'
import currentView from './currentView'
import currentProvider from './currentProvider'

export default combineReducers({
  providers,
  currentService,
  currentProvider
})