import React from 'react'
import {render} from 'react-dom'

import {Provider} from 'react-redux'

import { createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
    render( 
    <Provider store = {store} >
        <App />
        </Provider>,
        document.getElementById('app')
    )
})




