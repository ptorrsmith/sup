// CHILD OF ADMIN

import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import {connect} from 'react-redux'

const EditProfile = () => (

    <div>

    <div className="edit_profile_body">
    <p>Hello from EditProfile.
        
        This is where the forms will go to let the admin reinput some specific selected details.

        This page will basically be a replica of the view profile page, but will have an EDIT button beside each category. That will prompt a form/radio buttons to appear when pressed.
        E.G. - EDIT - FORM or RADIO BUTTONS (for the specific one chosen)- SAVE 
    </p>
    
    </div>

        {/* Allows the admin user to edit the more concrete
        details of a provider page, such as the address, the
        opening and closing hours, the requirements, etc. */}
    
    </div>
)

export default EditProfile