import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Map from './Map'
import Admin from './Admin'

import Sidebar from './TDC/Sidebar'
import AdminProfile from './AdminComponents/AdminProfile'
import AddProfile from './AdminComponents/AddProfile'
import EditProfile from './AdminComponents/EditProfile'
import LiveUpdate from './AdminComponents/LiveUpdate'
import Profile from './TDC/Profile';

import { fetchProvidersAndServices } from '../actions'

function getProviders(dispatch) {
    dispatch(fetchProvidersAndServices())
}

class App extends React.Component {
    constructor(props) {
        super(props)

        // this.getProviders = this.getProviders.bind(this)

    }

    componentDidMount() {
        this.props.fetchProvidersAndServices()
    }

    render() {
        return (

            <Router>
                <div>

                    <div className="app_header">
                        {/* <h1>Hello from the App Header</h1> */}
                    </div>
                    {/* <Map /> */}
                    {/* <Sidebar /> */}

                    <div className="app_body">
                        {/* <p>Hello from App Body</p> */}
                        <button onClick={() => { getProviders(this.props.dispatch) }}> get Info </button>

                    </div>

                    <Route exact path='/' component={Sidebar} />
                    <Route exact path="/" component={Map} />
                    <Route exact path="/admin" component={Admin} />
                    {/* Admin Profile has the ability to edit the profile, depending on the auth of the admin user */}
                    <Route exact path="/admin/:id" component={AdminProfile} />
                    <Route exact path="/admin/add" component={AddProfile} />
                    {/* EditProfile is exclusively used by the provider admin */}
                    <Route exact path="/admin/:id/edit" component={EditProfile} />
                    {/* Live Update is the live update page for front desk usage */}
                    <Route exact path="/liveupdate/:id" component={LiveUpdate} />


                    <Route exact path="/profile/:id" component={Profile} />

                </div>
            </Router>
        )
    }
}

{/* const mapStateToProps = (state) => {
    return (
      state  
    )
} */}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProvidersAndServices: (params) => {
            return dispatch(fetchProvidersAndServices(params))
        }

    }
}

export default connect(null, mapDispatchToProps)(App)





// Old functional version?

// const App = (props) => (

//     <Router>
//         <div>

//             <div className="app_header">
//                 {/* <h1>Hello from the App Header</h1> */}
//             </div>
//             {/* <Map /> */}
//             {/* <Sidebar /> */}

//             <div className="app_body">
//             {/* <p>Hello from App Body</p> */}
//             <button onClick={()=>{getProviders(props.dispatch)}}> getInfo </button>

//             </div>

//             <Route exact path='/' component={Sidebar} />
//             <Route exact path="/" component={Map} />
//             <Route exact path="/" component={Nav} />
//             <Route exact path="/admin" component={Admin} />
//             {/* Admin Profile has the ability to edit the profile, depending on the auth of the admin user */}
//             <Route exact path="/admin/:id" component={AdminProfile} />
//             <Route exact path="/admin/add" component={AddProfile} />
//             <Route exact path="/admin/:id/edit" component={EditProfile} />


//             <Route exact path="/profile/:id" component={Profile} />

//         </div>
//         </div>
//     </Router>
// )


//             <Route exact path="/profile/:id" component={Profile} />

//         </div>
//     </Router >
// )
