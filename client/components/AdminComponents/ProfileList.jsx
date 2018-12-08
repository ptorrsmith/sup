// CHILD OF ADMIN

// IMPORTS

import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import ViewProfile from './ViewProfile'
import AddProfile from './AddProfile';
import EditProfile from './EditProfile'

// IMPORT TEMPORARY DATA TO USE AS BASE FOR THIS
import data from '../../utils/exampleData'

class ProfileList extends React.Component {
    constructor(props) {
        super(props)

        // set initial state


        // bind functions

    }

    render() {

        return (

            <div>

                <div className="profile_list_body">

                    <ul>
                        {data.map((item) => {
                            return <li>
                                <Link to={`/admin/view/${item.provider_id}`}>{item.provider_name}</Link>
                                <br></br> {item.hours} <br></br> {item.address} <br></br>
                                {item.update_message} 
                                </li>
                        })}
                    </ul>

                </div>

                {/* When an admin clicks on a specific title, it will
                take you to ViewProfile>

                Each Profile will have the option to be edited, and a button
            for editing shows up beside the list */}

                <Link to="/admin/add">Add New Provider and Service</Link>
                {/* Add the ability to delete a provider? */}

            </div>

        )
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