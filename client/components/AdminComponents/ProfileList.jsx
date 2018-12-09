// CHILD OF ADMIN

// IMPORTS

import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProvidersAndServices } from '../../actions'

// IMPORT TEMPORARY DATA TO USE AS BASE FOR THIS
// import providersAndServices from '../../utils/exampleData'

class ProfileList extends React.Component {
    constructor(props) {
        super(props)

        // set initial state
        // no local state?


        // bind functions

    }

    componentWillMount() {
        console.log("Will mount")

        this.props.fetchProvidersAndServices()
    }

    componentDidMount() {
        console.log("mounted")
        // fetchProvidersAndServices()

    }

    render() {
        const providersAndServices = this.props.providers.providers
        console.log("ProfileList render providersAndServices >>>> ", providersAndServices)

        return (
            <div>
                <div className="profile_list_body">
                    <p>Welcome to the Admin Panel. This list displays all current providers and services in Wellington.</p>
                    <ul>
                        {providersAndServices && providersAndServices.map((provider, i) => {
                            return <li key={i}>
                                <Link to={`/admin/${provider.id}/`}>{provider.name}</Link>
                                <br/> {provider.hours} <br/> {provider.address} <br/>
                                {provider.update_message} <br/>
                                <Link to={`/admin/${provider.id}/edit`}>Edit this profile</Link> <br />
                                {provider.services.length} Services: 
                                <ul>
                                    {provider.services.map( (service, j) => {
                                        return <li key={j}>
                                            <Link to={`/admin/service/${service.id}`}>{service.name}</Link>
                                        </li>

                                    })}
                                </ul>
                            </li>
                        })}
                    </ul>
                    <Link to="/admin/add">Add a new profile</Link>
                </div>

                {/* When an admin clicks on a specific title, it will
                take you to AdminProfile, where the admin can edit specific static details.

                Add the ability to delete a provider? */}

            </div>
        )
    }
}


const mapStateToProps = ({ currentProvider, providers }) => {
    return {
        currentProvider,
        providers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProvidersAndServices: (params) => {
            return dispatch(fetchProvidersAndServices(params))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileList)