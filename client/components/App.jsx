import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Map from './Map'
import Admin from './Admin'
import Nav from './Nav'
import Sidebar from './TDC/Sidebar'
import ViewProfile from './AdminComponents/ViewProfile'

const App = () => (

    <Router>
        <div>

            <div className="app_header">
                {/* <h1>Hello from the App Header</h1> */}
            </div>

            {/* <Map /> */}
            {/* <Sidebar /> */}
            
            <div className="app_body">
            {/* <p>Hello from App Body</p> */}
            </div>

            <Route exact path='/' component={Sidebar} />
            <Route exact path="/" component={Map} />
            <Route exact path="/" component={Nav} />
            <Route exact path="/admin" component={Admin} />
            <Route path="/admin/:id" component={ViewProfile} />

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