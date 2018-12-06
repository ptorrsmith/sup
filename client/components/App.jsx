import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

// import Map from './Map'
import Admin from './Admin'
import Nav from './Nav'

const App = () => (

    <div>

        <div className="app_header">
            <h1>Is this React header in App working?</h1>
        </div>

        <React.Fragment>
            <Nav />
        </React.Fragment>

        <div className="app_body">
            <p> Map will go here, and will underlay the entire page.
                Nav will sit on top in the left hand side, and Admin will be accessible through the login/register tab in the Nav.
            </p>
        </div>

        <React.Fragment>
            <Admin />
        </React.Fragment>

    </div>
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