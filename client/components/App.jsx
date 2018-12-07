import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Map from './TDC/BobbiMap'
import Admin from './Admin'
import Nav from './Nav'

const App = () => (

    <Router>
        <div>

            <div className="app_header">
                <h1>Hello from the App Header</h1>
            </div>

            <Map />
            <div className="app_body">
                <p> Hello from the App body. Map will go here, and will underlay the entire page.
                    Nav will sit on top in the left hand side.
                    The Admin page will be accessible after the user has logged in, but for the demonstration and for usability,
                    it can be accessed at /admin.
            </p>
            </div>

            <Route exact path="/" component={Nav} />
            <Route exact path="/admin" component={Admin} />

        </div>
    </Router>
)


// class App extends React.Component {
//     constructor(props) {
//         super(props)

//     }
//     render() {
//         return (
//             <React.Fragment>

//                 <p>Is React working?</p>

//             </React.Fragment>
//         )
//     }
// }

export default App