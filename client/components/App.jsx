import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Landing from './Landing'
import Admin from './Admin'
import Nav from './Nav'

const App = () => (

    <Router>
        <div>
            <Route path='/' component={Landing} />
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