// CHILD OF ADMIN

import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

class AddProvider extends React.Component {
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
        this.onSubmit = this.onChange.bind(this);


    }
    onChange(e) {
        console.log("AddProvider onchange e = ", e)
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();

        this.props.createPost(this.state);
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
                            <input type="description" name="description" onChange={this.onChange} value={this.state.description} /></p>
                        <p>
                            <label for="address">Address:</label>
                            <input type="address" name="address" id="text" onChange={this.onChange} value={this.state.address} /> </p>
                        <p>
                            <label for="phone">Phone:</label>
                            <input type="phone" name="phone" id="text" onChange={this.onChange} value={this.state.phone} /></p>
                        <p>
                            <label for="email">Email:</label>
                            <input type="email" name="email" id="text" onChange={this.onChange} value={this.state.email} /></p>
                        <p>
                            <label for="hours">Hours:</label>
                            <input type="hours" name="hours" id="text" onChange={this.onChange} value={this.state.hours} /></p>
                        <p>
                            <label for="update_message">Update Message:</label>
                            <input type="update_message" name="update_message" id="text" onChange={this.onChange} value={this.state.update_message} /></p>
                        <p>
                            <label for="website_url">Website URL:</label>
                            <input type="website_url" name="website_url" id="text" onChange={this.onChange} value={this.state.website_url} /></p>
                        <p>
                            <label for="lat">Latitude:</label>
                            <input type="lat" name="lat" id="text" onChange={this.onChange} value={this.state.lat} /></p>
                        <p>
                            <label for="long">Longitude:</label>
                            <input type="long" name="long" id="text" onChange={this.onChange} value={this.state.long} /></p>


                        <button type="submit">Submit</button>
                    </fieldset>


                </form>

            </div>


        )
    }
}

export default AddProvider