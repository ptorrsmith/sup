// CHILD OF ADMIN

// IMPORTS

import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

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

                <p>Welcome to the Admin Panel. This list displays all current providers and services in Wellington.</p>

                    <ul>
                        {data.map((item) => {
                            return <li>
                                <Link to={`/admin/${item.provider_id}/`}>{item.provider_name}</Link>
                                <br></br> {item.hours} <br></br> {item.address} <br></br>
                                {item.update_message} 
                                </li>
                        })}
                    </ul>

                </div>

                {/* When an admin clicks on a specific title, it will
                take you to ViewProfile

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