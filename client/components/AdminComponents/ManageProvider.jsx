// CHILD OF ADMIN

import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { saveProvider } from '../../actions'


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


    }
    onChange(e) {
        // console.log("AddProvider onchange e = ", e)
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        // console.log("ManageProvider onsubmit e = ", e)

        this.props.saveProvider(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <fieldset>
                        <legend>New Provider Details</legend>
                        <p>
                            <label for="name">Name:</label>
                            <input type="name" name="name" id="text" onChange={this.onChange} value={this.state.name} /></p>

                        <p>
                            <label for="description">Description:</label>
                            <input type="text" name="description" onChange={this.onChange} value={this.state.description} /></p>

                        <p>
                            <label for="address">Address:</label>
                            <input type="text" name="address" id="text" onChange={this.onChange} value={this.state.address} /> </p>
                        <p>
                            <label for="phone">Phone:</label>
                            <input type="tel" name="phone" id="text" onChange={this.onChange} value={this.state.phone} /></p>
                        <p>
                            <label for="email">Email:</label>
                            <input type="email" name="email" id="text" onChange={this.onChange} value={this.state.email} /></p>
                        <p>
                            <label for="hours">Hours:</label>
                            <input type="text" name="hours" id="text" onChange={this.onChange} value={this.state.hours} /></p>
                        <p>
                            <label for="update_message">Update Message:</label>
                            <input type="text" name="update_message" id="text" onChange={this.onChange} value={this.state.update_message} /></p>
                        <p>
                            <label for="website_url">Website URL:</label>
                            <input type="text" name="website_url" id="text" onChange={this.onChange} value={this.state.website_url} /></p>
                        <p>
                            <label for="lat">Latitude:</label>
                            <input type="text" name="lat" id="text" onChange={this.onChange} value={this.state.lat} /></p>
                        <p>
                            <label for="long">Longitude:</label>
                            <input type="text" name="long" id="text" onChange={this.onChange} value={this.state.long} /></p>


                        <button type="submit">Submit</button>
                    </fieldset>


                </form>

            </div>


        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveProvider: providerInfo => {
            return dispatch(saveProvider(providerInfo));
        }
    }
}

export default connect(null, mapDispatchToProps)(ManageProvider)