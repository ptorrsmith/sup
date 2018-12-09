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
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        const post = {
            name: this.state.name,
            description: this.state.description,
            lat: this.state.lat,
            long: this.state.long,
            hours: this.state.hours,
            update_message: this.state.update_message,
            address: this.state.address,
            email: this.state.email,
            website_url: this.state.website_url,
            updated_at: this.state.updated_at
        }
        this.props.createPost(post);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    Name: <br />
                    <input type="text" name="name" onChange={this.onChange} value={this.state.name} /><br />
                    Description: <br />
                    <input type="text" name="description" onChange={this.onChange} value={this.state.description} /><br />
                    Address: <br />
                    <input type="text" name="address" onChange={this.onChange} value={this.state.address} /><br />
                    Phone: <br />
                    <input type="text" name="phone" onChange={this.onChange} value={this.state.phone} /><br />
                    Email: <br />
                    <input type="text" name="email" onChange={this.onChange} value={this.state.email} /><br />
                    Hours: <br />
                    <input type="text" name="hours" onChange={this.onChange} value={this.state.hours} /><br />
                    Update Message: <br />
                    <input type="text" name="update_message" onChange={this.onChange} value={this.state.update_message} /><br />
                    Website URL:<br />
                    <input type="text" name="website_url" onChange={this.onChange} value={this.state.website_url} /><br />
                    Latitude:<br />
                    <input type="number" name="lat" onChange={this.onChange} value={this.state.lat} /><br />
                    Longitude:<br />
                    <input type="number" name="long" onChange={this.onChange} value={this.state.long} /><br />
                    Updated At:<br />
                    <input type="number" name="updated_at" onChange={this.onChange} value={this.state.updated_at} /><br />
                    <br /> <br />
                    <button type="submit"></button>


                </form>

            </div>


        )
    }
}

export default AddProvider