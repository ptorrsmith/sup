// CHILD OF ADMIN

import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { saveService } from '../../actions'


class ManageService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      service: {
        name: "",
        qty_default: "",
        qty_remaining: "",
        unit: "",
        status: "",
        provider_id: "",
        service_type_id: ""
      },
      otherStuff: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


  }

  componentDidMount() {
    if (this.props.provider_id && !this.props.service) { // is an empty service form, with only provider_id known 
      this.setState({
        service: { provider_id: this.props.provider_id }
      })
    } // else
    if (!this.props.provider_id && this.props.service) {
      this.setState({
        service: this.props.service
      })
    }
  }

  onChange(e) {
    // console.log("AddProvider onchange e = ", e)
    this.setState({
      service: {
        ...this.state.service,
        [e.target.name]: e.target.value
      }
    });
  }
  onSubmit(e) {
    e.preventDefault();
    // console.log("ManageService onsubmit e = ", e)

    this.props.saveService(this.state.service);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <legend>New/Update Service Details:</legend>
            <p>Service ID: {this.state.service.id}</p>
            <p>
              <label htmlFor="name">Name:</label>
              <input type="name" name="name" id="text" onChange={this.onChange} value={this.state.service.name} /></p>

            <p>
              <label htmlFor="qty_default">Quantity Default:</label>
              <input type="text" name="qty_default" onChange={this.onChange} value={this.state.service.description} /></p>

            <p>
              <label htmlFor="qty_remaining">Quantity Remaining:</label>
              <input type="text" name="qty_remaining" id="text" onChange={this.onChange} value={this.state.service.address} /> </p>
            <p>
              <label htmlFor="unit">Unit:</label>
              <input type="text" name="unit" id="text" onChange={this.onChange} value={this.state.service.phone} /></p>
            <p>
              <label htmlFor="text">Status:</label>
              <input type="text" name="status" id="text" onChange={this.onChange} value={this.state.service.email} /></p>
            <p>
              <label htmlFor="provider_id">Provider ID:</label>
              <input type="text" name="provider_id" id="text" onChange={this.onChange} value={this.state.service.provider_id} /></p>
            <p>
              <label htmlFor="service_type_id">Service Type ID:</label>
              <input type="text" name="service_type_id" id="text" onChange={this.onChange} value={this.state.service.service_type_id} /></p>


            <button type="submit">Submit</button>
          </fieldset>


        </form>

      </div>


    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveService: serviceInfo => {
      return dispatch(saveService(serviceInfo));
    }
  }
}

export default connect(null, mapDispatchToProps)(ManageService)