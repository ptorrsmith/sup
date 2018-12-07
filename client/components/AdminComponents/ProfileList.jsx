// CHILD OF ADMIN

// EXAMPLE DATA

let exampleProvider = [
    {
        id: "23",
        name: "Wesley City Mission",
        address: "213 Abc Street, Thorndon, Wellington 6011",
        description: "We provide abc service, and xyz service",
        hours: "we're open 7 days from 3pm, doors close at 9:30pm",
        location: { lat, long },
        phone: "04-399-9990, or a/h 021-444-4444",
        email: "abcshelter@wcm.org.nz",
        services: [{ service1 }, { service2 }], // see service below
        images: [{ title: "front entrance", file: 'img_39218392.jpg' }, { title: "common lounge area", file: 'img_39218345.jpg' }],
        update_message: "All services operating currently, but we will be opening late (5:30pm) on Tuesday 18th due to maintenance work that day"
    }
]

let exampleService = {
    id: "34",
    name: "Sunday lunch roast",
    description: "A shared roast lunch each sunday after the 11am service",
    service_type: "Meals",  // from the service_type table
    service_icon: "meals-kitchen", // represents the icon css class to be applied. from the service_type table
    qty_default: "140", // number of meals in this case 
    qty_remaining: "80",  // will be udpated by poll for provider updates 
    qty_remaining_last_updated: "2018-12-13 18:07:43", // or whatever date format works
    service_status: "Open"
}


// IMPORTS

import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import ViewProfile from './ViewProfile'
import AddProfile from './AddProfile';

class ProfileList extends React.Component {
    constructor(props) {
        super(props)

        // set initial state


        // bind functions

    }

    render() {

        return <div className="profile_list_body">

            <React.Fragment>
                {/* Shows a full list of all provider profiles, organised
                by provider */}

                {/* Provider name:
                Services provided by provider: */}

                {/* When an admin clicks on a specific title, it will
            take you to... */}
                <ViewProfile />

                {/* Each Profile will have the option to be edited, and a button
            for editing shows up beside the list */}
                <EditProfile />

                {/* The ability to add a new profile from the Admin page */}
                <AddProfile />

            </React.Fragment>

        </div>

    }
}


//   const mapStateToProps = ({ provider, providers }) => {
//     return {
//       provider,
//       providers
//     }
//   }

//   const mapDispatchToProps = (dispatch) => {
//     return {
//       dispatch
//     }
//   }

export default connect()(ProfileList)