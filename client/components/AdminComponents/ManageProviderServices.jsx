import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { saveService, saveProvider, fetchProvider } from '../../actions'

import ManageService from './ManageService'
import ManageProvider from './ManageProvider'


class ManageProviderServices extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      providerId: ''
    }
  }
  // this.onChange = this.onChange.bind(this);
  // this.onSubmit = this.onSubmit.bind(this);



  // onChange(e) {
  //   // console.log("AddProvider onchange e = ", e)
  //   this.setState({ [e.target.name]: e.target.value });
  // }
  // onSubmit(e) {
  //   e.preventDefault();
  //   console.log("AddService onsubmit e = ", e)

  //   this.props.saveService(this.state);
  // }

  componentDidMount() {
    const id = this.props.match.params.id
    // console.log("XXXXXXXX Manager provider id is ", id || "EMPTY!!", this.props)
    if (id != "new") {
      this.setState({ providerId: id })
      this.props.fetchProvider(id)
    }
  }

  render() {
    if (this.props.currentProvider) {
      console.log("MPS: props.currentProvider", this.props.currentProvider)
    }
    if (this.state.providerId > 0) {
      // if (this.props.match.params.id > 0) {
      return (
        <div>
          <ManageProvider history={this.props.history} />
          {/* <ManageService /> */}
        </div>
      )
    } else {
      return (
        <div>
          <ManageProvider history={this.props.history} />
        </div>
      )
    }

  }

}


const mapStateToProps = ({ providers, currentProvider }) => {
  return {
    providers,
    currentProvider: currentProvider.currentProvider
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveProvider: providerInfo => {
      return dispatch(saveProvider(providerInfo))

    },
    saveService: serviceInfo => {
      return dispatch(saveService(serviceInfo))
    },
    fetchProvider: (params) => {
      return dispatch(fetchProvider(params))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageProviderServices)