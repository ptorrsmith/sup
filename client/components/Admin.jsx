// PARENT OF PROFILE LIST, LIVE EDIT, EDIT PROFILE, ADD PROFILE
// CHILD OF APP

import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import ProfileList from './AdminComponents/ProfileList'

const Admin = () => (
    <div>

        <div className="admin_header">
            {/* <h1>Hello from Admin header.</h1> */}
        </div>

        <div className="admin_body">
            {/* <p>Hello from Admin body.</p> */}
        </div>

        {/* When an item from the list is clicked, it will
            redirect to ViewProfile */}
        <ProfileList />

        <div className="admin_link">
            <Link to='/'>Go back to the Landing Page.</Link>
        </div>

    </div>

)

export default Admin