// CHILD OF VIEW PREVIEW - REDIRECTS HERE FROM PROFILE LIST
import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

// TEMPORARY DATA
import data from '../../utils/exampleData'

console.log(data)

// let components = data.map( (item) => {
//     return item
// })

// console.log(components)

const ViewProfile = () => (
    <div className="view_profile_body">
        <p>Hello from View Profile!</p>
               <p>Item details here</p>

        {/* This link doesnt work... Want the user to be given the opportunity to edit this specific page. */}
        <Link to="/admin/edit">Edit this Profile</Link>

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

export default ViewProfile