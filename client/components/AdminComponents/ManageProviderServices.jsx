import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { saveService } from '../../actions'
import { saveProvider } from '../../actions'
import ManageService from './ManageService'
import ManageProvider from './ManageProvider'


class ManageProviderServices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);


  }
  // onChange(e) {
  //   // console.log("AddProvider onchange e = ", e)
  //   this.setState({ [e.target.name]: e.target.value });
  // }
  // onSubmit(e) {
  //   e.preventDefault();
  //   console.log("AddService onsubmit e = ", e)

  //   this.props.saveService(this.state);
  // }

  render() {
    return (
      <div>
        <ManageProvider />
        <ManageService />

      </div>
    )

  }

}


const mapDispatchToProps = dispatch => {
  return {
    saveProvider: providerInfo => {
      return dispatch(saveProvider(providerInfo))

    },
    saveService: serviceInfo => {
      return dispatch(saveService(serviceInfo))
    }
  }
}

export default connect(null, mapDispatchToProps)(ManageProviderServices)