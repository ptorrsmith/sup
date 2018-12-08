import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Map from './Map'
import Admin from './Admin'
import Nav from './Nav'
import Sidebar from './TDC/Sidebar'

const App = () => (

    <Router>
        <div>

            <div className="app_header">
                {/* <h1>Hello from the App Header</h1> */}
            </div>

            <Map />
            <Sidebar />
            
            <div className="app_body">
            {/* <p>Hello from App Body</p> */}
            </div>

            <Route path="/" component={Nav} />
            <Route exact path="/admin" component={Admin} />

        </div>
    </Router >
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