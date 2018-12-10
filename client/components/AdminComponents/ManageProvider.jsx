// CHILD OF ADMIN

import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { saveProvider } from '../../actions'


class ManageProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // name: "",
            // description: "",
            // lat: "",
            // long: "",
            // hours: "",
            // address: "",
            // email: "",
            // website_url: "",
            // update_message: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    onChange(e) {
        // console.log("AddProvider onchange e = ", e)
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        // console.log("save provider: ", this.state)
        this.props.saveProvider(this.state);
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
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentProvider) {
            console.log("Current Provider CDU >>>>>>>> ", this.props.currentProvider)
            if (this.props.currentProvider != prevProps.currentProvider)
                this.setState({ ...this.props.currentProvider })
        }
    }


    render() {
        console.log("state!!!!!!:::", this.state)
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <fieldset>
                        <legend>New/update Provider Details</legend>
                        <p>
                            <label htmlFor="name">Name:</label>
                            <input type="name" name="name" id="text" onChange={this.onChange} value={this.state.name} /></p>

                        <p>
                            <label htmlFor="description">Description:</label>
                            <input type="text" name="description" onChange={this.onChange} value={this.state.description} /></p>

                        <p>
                            <label htmlFor="address">Address:</label>
                            <input type="text" name="address" id="text" onChange={this.onChange} value={this.state.address} /> </p>
                        <p>
                            <label htmlFor="phone">Phone:</label>
                            <input type="tel" name="phone" id="text" onChange={this.onChange} value={this.state.phone} /></p>
                        <p>
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="text" onChange={this.onChange} value={this.state.email} /></p>
                        <p>
                            <label htmlFor="hours">Hours:</label>
                            <input type="text" name="hours" id="text" onChange={this.onChange} value={this.state.hours} /></p>
                        <p>
                            <label htmlFor="update_message">Update Message:</label>
                            <input type="text" name="update_message" id="text" onChange={this.onChange} value={this.state.update_message} /></p>
                        <p>
                            <label htmlFor="website_url">Website URL:</label>
                            <input type="text" name="website_url" id="text" onChange={this.onChange} value={this.state.website_url} /></p>
                        <p>
                            <label htmlFor="lat">Latitude:</label>
                            <input type="text" name="lat" id="text" onChange={this.onChange} value={this.state.lat} /></p>
                        <p>
                            <label htmlFor="long">Longitude:</label>
                            <input type="text" name="long" id="text" onChange={this.onChange} value={this.state.long} /></p>


                        <button type="submit">Submit</button>
                    </fieldset>


                </form>

            </div>


        )
    }
}

const mapStateToProps = ({ providers, currentProvider }) => {
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