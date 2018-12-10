// CHILD OF ADMIN

import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { saveService } from '../../actions'


class ManageService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      qty_default: "",
      qty_remaining: "",
      unit: "",
      status: "",
      provider_id: "",
      service_type_id: ""
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
    // console.log("ManageService onsubmit e = ", e)

    this.props.saveService(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <legend>New Service Details</legend>
            <p>
              <label for="name">Name:</label>
              <input type="name" name="name" id="text" onChange={this.onChange} value={this.state.name} /></p>

            <p>
              <label for="qty_default">Quantity Default:</label>
              <input type="text" name="qty_default" onChange={this.onChange} value={this.state.description} /></p>

            <p>
              <label for="qty_remaining">Quantity Remaining:</label>
              <input type="text" name="qty_remaining" id="text" onChange={this.onChange} value={this.state.address} /> </p>
            <p>
              <label for="unit">Unit:</label>
              <input type="text" name="unit" id="text" onChange={this.onChange} value={this.state.phone} /></p>
            <p>
              <label for="text">Status:</label>
              <input type="text" name="status" id="text" onChange={this.onChange} value={this.state.email} /></p>
            <p>
              <label for="provider_id">Provider ID:</label>
              <input type="text" name="provider_id" id="text" onChange={this.onChange} value={this.state.hours} /></p>
            <p>
              <label for="service_type_id">Service Type ID:</label>
              <input type="text" name="service_type_id" id="text" onChange={this.onChange} value={this.state.update_message} /></p>


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