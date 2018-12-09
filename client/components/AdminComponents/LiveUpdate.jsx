import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import {connect} from 'react-redux'

import { currentProvider } from '../../actions/index'

class LiveUpdate extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return <div>Hello from LiveUpdate Stateful</div>
    }
}

const mapStateToProps = (state) => {
    return {
      state
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      dispatch
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LiveUpdate)