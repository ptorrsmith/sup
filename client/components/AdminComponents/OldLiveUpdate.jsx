import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { currentProvider } from '../../reducers/currentProvider'
import { fetchProvider, setServiceQtyRemaining, setServiceStatus, setProviderMessage } from '../../actions'

class LiveUpdate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "",
            status: "",
            quantity: 0
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillMount() {
        const id = this.props.match.params.id
        this.props.fetchProvider(id)
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentProvider.update_message != prevProps.currentProvider.update_message) {
            this.setState({
                message: this.props.currentProvider.update_message
            })
        } if (this.props.currentProvider.services !== prevProps.currentProvider.services) {
            this.props.currentProvider.services.map(service => {
                this.setState({
                    [`P${this.props.currentProvider.id}-S${service.id}-status`]: service.status,
                    [`P${this.props.currentProvider.id}-S${service.id}-quantity`]: service.qty_remaining
                })
            })
        }

    }

    handleOnChange(e, serviceId) {
        e.preventDefault()
        if (e.target.id == "add" || e.target.id == "subtract") {
            const change = (e.target.id == "add") ? 1 : -1
            this.props.setServiceQtyRemaining(this.props.currentProvider.id, serviceId, this.state[e.target.name] + change)
        }
        else {

            this.setState({
                [e.target.name]: e.target.value,
            })
        }
    }


    handleSubmit(e, serviceId) {
        e.preventDefault()
        this.props.setProviderMessage(this.props.currentProvider.id, this.state.message)
        if (serviceId != undefined) {
            const dataKey = `P${this.props.currentProvider.id}-S${serviceId}-status`
            const dataQty = `P${this.props.currentProvider.id}-S${serviceId}-quantity`
            this.props.setServiceStatus(this.props.currentProvider.id, serviceId, this.state[dataKey])
            this.props.setServiceQtyRemaining(this.props.currentProvider.id, serviceId, this.state[dataQty])
        }
    }

    render() {
        let provider = this.props.currentProvider

        const anotherProvider = this.props.providers.find((aProvider) => this.props.currentProvider.id == aProvider.id)
        if (anotherProvider) {
            provider = anotherProvider
        }
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
                        <p>Change the Provider Message here:</p>
                        <input type='text' id='set_provider_message' name='message' onChange={this.handleOnChange} value={this.state.message} />
                        <button>Submit Message</button>
                    </form>

                </div>

                {/* Service Forms Below */}

                <div id='live_update_service_form'>
                    {provider.services && provider.services.map(service => {
                        return (
                            <div>

                                <div id='service_name'>

                                    <h3>Service Name: {service.name} {service.id} </h3>

                                </div>

                                <div id="service_qty">

                                    <p> Default Quantity: {service.qty_default}, {service.qty_remaining}</p>

                                    <form onSubmit={(e) => { this.handleSubmit(e, service.id) }}>

                                        <span name={`P${provider.id}-S${service.id}-quantity`} onChange={this.handleOnChange} value={this.state[`P${provider.id}-S${service.id}-quantity`]} > {this.state[`P${provider.id}-S${service.id}-quantity`]} </span>
                                        <button id="add" onClick={(e) => { this.handleOnChange(e, service.id) }} name={`P${provider.id}-S${service.id}-quantity`}> + </button>
                                        <button id="subtract" onClick={(e) => { this.handleOnChange(e, service.id) }} name={`P${provider.id}-S${service.id}-quantity`}> - </button>

                                    </form>

                                </div>

                                <div id='service_status'>

                                    <h3>Current Service Status: {service.status}</h3>

                                    <form onSubmit={(e) => { this.handleSubmit(e, service.id) }}>
                                        <p>Set New Service Status:</p>
                                        <input type='text' name={`P${provider.id}-S${service.id}-status`} onChange={this.handleOnChange} value={this.state[`P${provider.id}-S${service.id}-status`]} />
                                        <button>Set New Status</button>
                                    </form>

                                </div>

                            </div>
                        )
                    }
                    )}
                </div>

                {/* OUTSIDE DIVS */}

            </div >

        )
    }
}

const mapStateToProps = ({ providers, currentProvider }) => {
    return {
        currentProvider: currentProvider.currentProvider,
        providers: providers.providers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProvider: (id) => {
            return dispatch(fetchProvider(id))
        },
        setProviderMessage: (id, message) => {
            return dispatch(setProviderMessage(id, message))
        },
        setServiceStatus: (providerId, serviceId, status) => {
            return dispatch(setServiceStatus(providerId, serviceId, status))
        },
        setServiceQtyRemaining: (providerId, serviceId, quantity) => {
            return dispatch(setServiceQtyRemaining(providerId, serviceId, quantity))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LiveUpdate)