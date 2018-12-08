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
<<<<<<< HEAD
                {/* <h1>Hello from the App Header</h1> */}
            </div>

            <Map />
            <Sidebar />
            
            <div className="app_body">
                {/* <p> Hello from the App body. Map will go here, and will underlay the entire page.
=======
             {/* Main header to encompass all pages... */}
            </div>

            <React.Fragment>
                <Map />
            </React.Fragment>

            <div className="app_body">
                <p> NOTES: Map will go here, and will underlay the entire page.
>>>>>>> d9aef2472b578a22488630655737d3b8c42d9279
                    Nav will sit on top in the left hand side.
                    The Admin page will be accessible after the user has logged in, but for the demonstration and for usability,
                    it can be accessed at /admin. 
            </p> */}
            </div>

            <Route path="/" component={Nav} />
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