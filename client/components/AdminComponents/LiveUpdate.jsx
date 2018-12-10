import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { currentProvider } from '../../reducers/currentProvider'
import { fetchProvider, setServiceQtyRemaining, setServiceStatus, setProviderMessage } from '../../actions'

class LiveUpdate extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            message: ""
        }
        // set initial state
        // no local state?

        // bind functions

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillMount() {
        console.log("Will mount")
        const id = this.props.match.params.id
        this.props.fetchProvider(id)
    }

    componentDidMount() {
        console.log("mounted")
    }

    handleOnChange(e) {
        e.preventDefault() 
        this.setState ({ 
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        // Call thunk with message, to call API
        // console.log('HandleSubmit: ', this.state.message)

    }

    render() {
        // console.log('render props:', this.props)
        // console.log('render updatemessage provider', this.props.fetchProvider.update_message)
        

        return (

        <div>

        {/* <div id='live_update_header'>
        (Provider Name) </div> */}

        <div id='live_update_body'>

        <form onSubmit={this.handleSubmit}>
            <p>Provider Message:</p>
            <input type='text' id='set_provider_message' name='message' onChange={this.handleOnChange} value={this.props.currentProvider.currentProvider.update_message}/>
            <button>Submit Message</button>

        </form>

        </div>

        </div>

        )
    }
}

const mapStateToProps = ({ currentProvider }) => {
    return {
        currentProvider
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProvider: (id) => {
            return dispatch(fetchProvider(id))
        },
        setProviderMessage: (message) => {
            return dispatch(setProviderMessage(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LiveUpdate)