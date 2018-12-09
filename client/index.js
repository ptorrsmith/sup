import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'

import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducers from './reducers'
import App from './components/App'


// REDUX STUFF BELOW:

let store = createStore(reducers, compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f

    // to be updated to window.__REDUX_DEVTOOLS_EXTENSION__
))

document.addEventListener('DOMContentLoaded', () => {
    render(
        <Provider store={store} >
            <App />
        </Provider>,

        document.getElementById('app')
    )
})




