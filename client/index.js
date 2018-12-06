import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'

import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducers from './reducers'
import App from './components/App'



let store = createStore(reducers, compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

document.addEventListener('DOMContentLoaded', () => {
    render(
        <App />,

<<<<<<< HEAD

=======
// REDUX STUFF BELOW:
    
// let store = createStore(reducers, compose(
//     applyMiddleware(thunkMiddleware),
//     window.devToolsExtension ? window.devToolsExtension() : f => f
>>>>>>> 6c28c928e86c2c0a6030a74e058504864d1f6453


        // document.addEventListener('DOMContentLoaded', () => {
        //     render(
        //         <Provider store={store} >
        //             <App />
        //         </Provider>,

        document.getElementById('app')
    )
})




