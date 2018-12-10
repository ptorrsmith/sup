// CHILD OF ADMIN

import React from 'react'
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { saveProvider } from '../../actions'

import ManageService from './ManageService'

class ManageProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            lat: "",
            long: "",
            hours: "",
            address: "",
            email: "",
            website_url: "",
            update_message: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.routeChanged = this.routeChanged.bind(this);

    }
    onChange(e) {
        // console.log("AddProvider onchange e = ", e)
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        // console.log("save provider: ", this.state)
        console.log("Saving this.state -----------------> ", this.state)
        this.props.saveProvider(this.state)
        // .then(
        console.log("NOT THENed, no promise! Saved this.state -----------------> REDIRECT? ID = ", this.props.currentProvider.id)
        // )
    }

    componentDidMount() {
        // const id = this.props.match.params.id
        // console.log("XXXXXXXX Manager provider id is ", id || "EMPTY!!", this.props)
        // if (id != "new") {
        //   this.setState({ providerId: id })
        // this.props.fetchProvider(id)
        // }
        // if (this.props.currentProvider) {
        //     console.log("Current Provider CDM >>>>>>>> ", this.props.currentProvider)
        //     this.setState({ ...this.props.currentProvider })
        // }
        // if (this.props.currentProvider) {
        console.log("Current Provider CDM >>>>>>>> ", this.props.currentProvider)
        //     if (this.props.currentProvider.id && this.props.currentProvider != prevProps.currentProvider)
        //         this.setState({ ...this.props.currentProvider })
        // }

        console.log(this.props)

        if (this.props.history) {
            console.log('tracking history')
            this.props.history.listen(this.routeChanged)
        }
    }

    routeChanged(params) {
        console.log('route change', params)
    }

    // if (this.props.currentProvider.id) {
    componentDidUpdate(prevProps) {
        // console.log("Current Provider CDU _______ ", this.props.currentProvider, this.state)

        if (this.props.currentProvider.id && this.props.currentProvider != prevProps.currentProvider) {
            // console.log("Current Provider CDU XXXXXXX ", this.props.currentProvider, this.state)
            // console.log("Have current Provider: ", this.props.currentProvider)
            this.setState({ ...this.props.currentProvider })
            this.props.history.push(`/admin/providers/${this.props.currentProvider.id}`)
        } else {
            // console.log("No Current Provider CDU >>>>>> ", this.props.currentProvider, this.state)
        }
        // }
    }


    render() {
        // console.log("state!!!!!!:::", this.state)
        if (this.props.currentProvider && this.props.currentProvider.id) {
            // console.log("Current Provider ?????, should I redirect?", this.props.currentProvider)
            // return <Redirect to={`/admin/providers/${this.props.currentProvider.id}`} />
        } // else
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <fieldset>
                        <legend>New/update Provider Details</legend>
                        <p>
                            <label htmlFor="name">Name:</label>
                            <input type="name" name="name" id="text" onChange={this.onChange} value={this.state.name || ""} /></p>

                        <p>
                            <label htmlFor="description">Description:</label>
                            <input type="text" name="description" onChange={this.onChange} value={this.state.description || ""} /></p>

                        <p>
                            <label htmlFor="address">Address:</label>
                            <input type="text" name="address" id="text" onChange={this.onChange} value={this.state.address || ""} /> </p>
                        <p>
                            <label htmlFor="phone">Phone:</label>
                            <input type="tel" name="phone" id="text" onChange={this.onChange} value={this.state.phone || ""} /></p>
                        <p>
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="text" onChange={this.onChange} value={this.state.email || ""} /></p>
                        <p>
                            <label htmlFor="hours">Hours:</label>
                            <input type="text" name="hours" id="text" onChange={this.onChange} value={this.state.hours || ""} /></p>
                        <p>
                            <label htmlFor="update_message">Update Message:</label>
                            <input type="text" name="update_message" id="text" onChange={this.onChange} value={this.state.update_message || ""} /></p>
                        <p>
                            <label htmlFor="website_url">Website URL:</label>
                            <input type="text" name="website_url" id="text" onChange={this.onChange} value={this.state.website_url || ""} /></p>
                        <p>
                            <label htmlFor="lat">Latitude:</label>
                            <input type="text" name="lat" id="text" onChange={this.onChange} value={this.state.lat || ""} /></p>
                        <p>
                            <label htmlFor="long">Longitude:</label>
                            <input type="text" name="long" id="text" onChange={this.onChange} value={this.state.long || ""} /></p>


                        <button type="submit">Submit</button>
                    </fieldset>


                </form>

                {this.props.currentProvider.id && <ManageService provider_id={this.props.currentProvider.id}/>}


            </div>


        )
    }
}

const mapStateToProps = ({ currentProvider }) => {
    return {
        currentProvider: currentProvider.currentProvider
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveProvider: providerInfo => {
            return dispatch(saveProvider(providerInfo));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageProvider)