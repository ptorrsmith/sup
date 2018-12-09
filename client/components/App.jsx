import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Map from './Map'
import Admin from './Admin'
import Nav from './Nav'
import Sidebar from './TDC/Sidebar'
import AdminProfile from './AdminComponents/AdminProfile'
import AddProfile from './AdminComponents/AddProfile'
import EditProfile from './AdminComponents/EditProfile'
import Profile from './TDC/Profile';

import { fetchProvidersAndServices } from '../actions'

function getProviders(dispatch) {
    dispatch(fetchProvidersAndServices())
}

const App = (props) => (

    <Router>
        <div>

            <div className="app_header">
                {/* <h1>Hello from the App Header</h1> */}
            </div>
            {/* <Map /> */}
            {/* <Sidebar /> */}
            
            <div className="app_body">
            {/* <p>Hello from App Body</p> */}
            <button onClick={()=>{getProviders(props.dispatch)}}> getInfo </button>

            </div>

            <Route exact path='/' component={Sidebar} />
            <Route exact path="/" component={Map} />
            <Route exact path="/" component={Nav} />
            <Route exact path="/admin" component={Admin} />
            {/* Admin Profile has the ability to edit the profile, depending on the auth of the admin user */}
            <Route exact path="/admin/:id" component={AdminProfile} />
            <Route exact path="/admin/add" component={AddProfile} />
            <Route exact path="/admin/:id/edit" component={EditProfile} />


            <Route exact path="/profile/:id" component={Profile} />

        </div>
    </Router>
)

            
//             <Route exact path="/profile/:id" component={Profile} />

//         </div>
//     </Router >
// )

{/* class App extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (

            <Router>
                <div>

                    <div className="app_header"> */}
                        {/* <h1>Hello from the App Header</h1> */}
                    {/* </div> */}

                    {/* <Map /> */}
                    {/* <Sidebar /> */}

                    {/* <div className="app_body"> */}
                        {/* <p>Hello from App Body</p> */}
                    {/* </div> */}

                    {/* <Route exact path='/' component={Sidebar} />
                    <Route exact path="/" component={Map} />
                    <Route exact path="/" component={Nav} />
                    <Route exact path="/admin" component={Admin} /> */}
                    {/* Admin Profile has the ability to edit the profile, depending on the auth of the admin user */}

                    {/* <Route exact path="/admin/:id" component={AdminProfile} />

                    <Route exact path="/admin/add" component={AddProfile} />
                    <Route exact path="/admin/:id" component={AdminProfile} />
                    <Route exact path="/admin/:id/edit" component={EditProfile} />
                    <Route exact path="/admin/services/:id/edit" component={EditProfile} />
                    <Route exact path="/admin/services/:id" component={EditProfile} />

                </div>
            </Router >
        )
    }
}  */}

{/* const mapStateToProps = (state) => {
    return (
      state  
    )
} */}

const mapDispatchToProps = (dispatch) => {
    return (
        dispatch
    )

}

export default connect()(App)