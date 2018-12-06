// CHILD OF ADMIN

import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

const ProfileList = () => (

    <div>
        
        <div className="profile_list_body">
            <p>Hello from ProfileList.</p>
        </div>

        <React.Fragment>
            {/* Shows a full list of all provider profiles,
            organised by Service Type */}
        </React.Fragment>

    </div>
)

export default ProfileList