import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import {connect} from 'react-redux'

// import Map from './Map'
// import Admin from './Admin'
import Nav from './Nav'

const App = () => (
    <div className="app_header">
        <h1>Is this React header in App working?</h1>

        <Nav />
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