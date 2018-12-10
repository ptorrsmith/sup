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

    componentDidUpdate(prevProps) {
        if (this.props.currentProvider.update_message != prevProps.currentProvider.update_message) {
            this.setState({
                message: this.props.currentProvider.update_message
            })
        }
    }

    handleOnChange(e) {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.setProviderMessage('1', this.state.message)
    }

    render() {
        const provider = this.props.currentProvider
        return (

            <div>

                {/* HEADER */}
                <div id='live_update_header'>
                    <h2>
                        {this.props.currentProvider.name}
                    </h2>
                </div>


                {/* Provider Message Form Below */}
                <div id='live_update_provider_form'>

                    <form onSubmit={this.handleSubmit}>
                        <p>Provider Message:</p>
                        <input type='text' id='set_provider_message' name='message' onChange={this.handleOnChange} value={this.state.message/*this.props.currentProvider.currentProvider.update_message*/} />
                        <button>Submit Message</button>
                    </form>

                </div>

                {/* Service Forms Below */}

                <div id='live_update_service_form'>
                    {provider.services && provider.services.map(service => {
                        return (
                            <div>

                                <div id='service_name'>

                                <h3>Service Name: {service.name || "No Name"}</h3>
                                <p>Default Quantity: {service.qty_default}</p>

                                <form onSubmit={this.handleSubmit}>
                                    <p>Set New Quantity:</p>
                                    <input type='text' id='set_new_qty' name='qty_remaining' onChange={this.handleOnChange} value={service.qty_remaining} />
                                    <button>Set New Quantity</button>
                                </form>

                                </div>

                                <div id='service_status'>

                                <h3>Current Service Status: {service.status}</h3>

                                <form onSubmit={this.handleSubmit}>
                                    <p>Set New Service Status:</p>
                                    <input type='text' id='set_new_status' name='new_service_status' onChange={this.handleOnChange} value={service.status} />
                                    <button>Set New Status</button>
                                </form>

                                </div>

                            </div>
                        )
                    }
                    )}
                </div>

                {/* OUTSIDE DIVS */}

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

