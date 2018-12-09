import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { currentProvider } from '../../reducers/currentProvider'
import { setQtyRemaining, setUpdate, setStatus } from '../../actions'

class LiveUpdate extends React.Component {
    constructor(props) {
        super(props)
        // set initial state
        // no local state?

        // bind functions
    }

    // componentWillMount() {
    //     console.log("Will mount")

    //     this.props._____
    // }

    // componentDidMount() {
    //     console.log("mounted")
    // }

    render() {
        // const providersAndServices = this.props.providers.providers
        // console.log("ProfileList render providersAndServices >>>> ", providersAndServices)

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