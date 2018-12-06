// PARENT OF PROFILE LIST, LIVE EDIT, EDIT PROFILE, ADD PROFILE
// CHILD OF APP

import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import {connect} from 'react-redux'

// import ProfileList from './ProfileList'
// import LiveEdit from './LiveEdit'
// import EditProfile from './EditProfile'
// import AddProfile from './AddProfile'

const Admin = () => (
    <React.Fragment>

        {/* When an item from the list is clicked, it will
        redirect to ViewProfile */}
        <ProfileList />

        {/* Allow the shelter to make a live edit to a provider 
        profile */}
        <LiveEdit />

        {/* Allow the admin to edit the more permanent information
        of a provider's profile */}
        <EditProfile />

        {/* Allow user to add a new provider profile */}
        <AddProfile />

    </React.Fragment>
)

export default Admin