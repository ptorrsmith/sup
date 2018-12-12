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
      otherStuff: 'not used yet'
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


  }

  componentDidMount() {
    if (this.props.provider_id && !this.props.service) { // is an empty service form, with only provider_id known 
      this.setState({
        service: {
          provider_id: this.props.provider_id,
          name: "",
          qty_default: 0,
          qty_remaining: 0,
          unit: "",
          status: ""
        }
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
    const value = (e.target.type == "radio") ? e.target.id : e.target.value
    this.setState({
      service: {
        ...this.state.service,
        [e.target.name]: value
      }
    });
  }
  onSubmit(e) {
    e.preventDefault();
    // console.log("ManageService onsubmit state.service ", this.state.service)
    if (this.state.service.service_type_id > 0) {
      this.props.saveService(this.state.service);
    } else {
      alert("please select a Service Type")
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <legend>Service Details:</legend>
            <p>Service ID: {this.state.service.id} for provider {this.state.provider_id}</p>
            <p>
              <input type="hidden" name="provider_id" value={this.state.service.provider_id} /></p>
            <p>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="text" onChange={this.onChange} value={this.state.service.name} /></p>

            <p>
              <label htmlFor="qty_default">Quantity Default:</label>
              <input type="text" name="qty_default" onChange={this.onChange} value={this.state.service.qty_default} /></p>

            <p>
              <label htmlFor="qty_remaining">Quantity Remaining:</label>
              <input type="text" name="qty_remaining" id="text" onChange={this.onChange} value={this.state.service.qty_remaining} /> </p>
            <p>
              <label htmlFor="unit">Unit:</label>
              <input type="text" name="unit" id="text" onChange={this.onChange} value={this.state.service.unit} /></p>
            <p>
              <label htmlFor="text">Status:</label>
              <input type="text" name="status" id="text" onChange={this.onChange} value={this.state.service.status} /></p>
            <p>
              <input type="radio" name="service_type_id" id="1" onChange={this.onChange} value="Shelters" checked={(this.state.service.service_type_id == 1) ? "checked" : ""} />
              <label htmlFor="1">Shelter </label>

              <input type="radio" name="service_type_id" id="2" onChange={this.onChange} value="Food Banks" checked={(this.state.service.service_type_id == 2) ? "checked" : ""} />
              <label htmlFor="2">Food Bank </label>

              <input type="radio" name="service_type_id" id="3" onChange={this.onChange} value="Soup Kitchens" checked={(this.state.service.service_type_id == 3) ? "checked" : ""} />
              <label htmlFor="2">Soup Kitchen </label>

              <input type="radio" name="service_type_id" id="4" onChange={this.onChange} value="Advice" checked={(this.state.service.service_type_id == 4) ? "checked" : ""} />
              <label htmlFor="2">Advice </label>

              <input type="radio" name="service_type_id" id="5" onChange={this.onChange} value="Drop in" checked={(this.state.service.service_type_id == 5) ? "checked" : ""} />
              <label htmlFor="2">Drop in </label>

              <input type="radio" name="service_type_id" id="6" onChange={this.onChange} value="Medical" checked={(this.state.service.service_type_id == 6) ? "checked" : ""} />
              <label htmlFor="2">Medical </label>
              
              <input type="radio" name="service_type_id" id="7" onChange={this.onChange} value="Other" checked={(this.state.service.service_type_id == 7) ? "checked" : ""} />
              <label htmlFor="2">Other </label>
            </p>


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