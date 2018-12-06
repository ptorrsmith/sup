// PARENT OF PROFILE LIST, LIVE EDIT, EDIT PROFILE, ADD PROFILE
// CHILD OF APP

import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import ProfileList from './AdminComponents/ProfileList'
import LiveEdit from './AdminComponents/LiveEdit'
import EditProfile from './AdminComponents/EditProfile'
import AddProfile from './AdminComponents/AddProfile'

const Admin = () => (
    <div>

        <div className="admin_header">
            <h1>Hello from Admin.</h1>
        </div>

        <div className="admin_body">
        <p>Here is the Admin body.</p>
        </div>

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

        <div className="admin_link">
        <Link to='/'>Go back to the Landing Page.</Link>
        </div>

    </div>

)

export default Admin