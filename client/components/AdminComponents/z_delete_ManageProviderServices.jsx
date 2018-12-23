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

  componentDidMount() {
    const id = this.props.match.params.id
    if (id != "new") {
      this.setState({ providerId: id })
      this.props.fetchProvider(id)
    }
  }

  render() {
    if (this.props.currentProvider) {
    }
    if (this.state.providerId > 0) {
      return (
        <div>
          <ManageProvider history={this.props.history} />
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