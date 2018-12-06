import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import {connect} from 'react-redux'

import Map from './Map'
import Admin from './Admin'
import Nav from './Nav'

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <React.Fragment>

                <p>Is React working?</p>

                <Map />
                <Admin />
                <Nav />

            </React.Fragment>
        )
    }
}

export default App