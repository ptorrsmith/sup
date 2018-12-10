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

    componentDidUpdate(prevProps){
        // console.log("Message is ",this.props.currentProvider.currentProvider.update_message)
        if(this.props.currentProvider.update_message != prevProps.currentProvider.update_message){
            this.setState({
                message: this.props.currentProvider.update_message
            })
        }
    }

    handleOnChange(e) {
        e.preventDefault() 
        this.setState ({ 
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault() 
        this.props.setProviderMessage('1', this.state.message)
        // Call thunk with message, to call API
        // console.log('HandleSubmit: ', this.state.message)
    }

    render() {

        const provider = this.props.currentProvider

        return (

        <div>

        <div id='live_update_header'>
        <h2>
        {this.props.currentProvider.name}
        </h2>
        </div>

        <div id='live_update_forms'>

        <form onSubmit={this.handleSubmit}>
            <p>Provider Message:</p>
            <input type='text' id='set_provider_message' name='message' onChange={this.handleOnChange} value={this.state.message/*this.props.currentProvider.currentProvider.update_message*/} />
            <button>Submit Message</button>

            {/* If service does not have a service quantity, just show provider
            message and service status. 
            If service has one or more services, show the provider and all 
            services. */}

        </form>

        <div id='live_update_services'>
                {provider.services && provider.services.map(service => {
                return (
                    <div> 
                        <h3>Service Name: {service.name || "No Name" }</h3>
                        <p>Default Quantity: {service.qty_default} <br></br>
                            Quantity Remaining: {service.qty_remaining}</p>
                    </div>
                )
            }
            )}
            
        </div>

        </div>

        </div>

        )
    }
}

const mapStateToProps = ({ currentProvider }) => {
    return {
        currentProvider: currentProvider.currentProvider
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProvider: (id) => {
            return dispatch(fetchProvider(id))
        },
        setProviderMessage: (id, message) => {
            return dispatch(setProviderMessage(id, message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LiveUpdate)