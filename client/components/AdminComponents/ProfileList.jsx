// CHILD OF ADMIN

// IMPORTS

import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import ViewProfile from './ViewProfile'
import AddProfile from './AddProfile';
import EditProfile from './EditProfile'

// IMPORT TEMPORARY DATA TO USE AS BASE FOR THIS
import { data } from '../../utils/tempData'

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