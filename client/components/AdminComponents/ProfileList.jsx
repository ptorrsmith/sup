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
        // console.log("Will mount")

        this.props.fetchProvidersAndServices()
    }

    componentDidMount() {
        // console.log("mounted")
        // fetchProvidersAndServices()

    }

    componentDidUpdate() {
        // console.log("updated")
        // const id = this.props.match.params.id;
        // // get the provider from global redux state'
        // const currentProvider =
        //     this.props.providers.length > 0 &&
        //     this.props.providers.find(provider => provider.id == id);
        // currentProvider && this.props.setCurrentProvider(currentProvider);
    }



    render() {
        const providersAndServices = this.props.providers.providers
        // console.log("ProfileList render providersAndServices >>>> ", providersAndServices)

        return (
            <div>
                <div className="profile_list_body">
                    <p>Welcome to the Admin Panel. This list displays all current providers and services in Wellington.</p>
                    <ul>
                        {providersAndServices && providersAndServices.map((provider, i) => {
                            return <li key={i}>
                                {provider.name}
                                <br /> {provider.hours} <br /> {provider.address} <br />
                                {provider.update_message} <br />
                                <Link to={`/profile/${provider.id}`}>Profile</Link> | <Link to={`/admin/providers/${provider.id}`}>Edit</Link> | <Link to={`/liveupdate/${provider.id}`}>LiveUpdate</Link>
                                <br />
                                {provider.services.length} Services:
                                <ul>
                                    {provider.services.map((service, j) => {
                                        return <li key={j}>
                                            {/* <Link to={`/admin/service/${service.id}`}>{service.name}</Link> */}
                                            {service.name}
                                        </li>

                                    })}
                                </ul>
                            </li>
                        })}
                    </ul>

                </div>

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