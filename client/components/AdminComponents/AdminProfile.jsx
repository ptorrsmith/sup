// CHILD OF VIEW PREVIEW - REDIRECTS HERE FROM PROFILE LIST
import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

// TEMPORARY DATA
import data from '../../utils/exampleData'

// let components = data.map( (item) => {
//     return item
// })

// console.log(components)

const AdminProfile = () => (
    <div className="view_profile_body">

        <div>
            <p>Welcome to Admin Profile. Specific profile data will be displayed here. <br></br>
                There is supposed to be a link below here that reads 'edit this page's static contents?' but it doesn't seem to be working. Talk to Ruby and perhaps help her fix it when this functionality is necessary!</p>
        </div>

        <div>
            <Link to={`/admin/${item.provider_id}/edit`}>
                Edit this page's static contents?
        </Link>

        </div>

        {/* SERVICE:
        id:
        name:
        description:
        service_type:
        service_icon:
        qty_default:
        qty_remaining:
        qty_remaining_last_updated:
        service_status: 
    */}

        {/* PROVIDER:
        id: 
        name:
        address:
        description:
        hours:
        location:
        phone:
        email:
        services:
        images:
        update_message: 
        */}

    </div>
)

export default AdminProfile