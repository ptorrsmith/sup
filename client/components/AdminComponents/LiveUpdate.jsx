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
            status: ""
        }
        // set initial state
        // no local state?

        // bind functions
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillMount() {
        // console.log("Will mount")
        const id = this.props.match.params.id
        this.props.fetchProvider(id)
    }

    componentDidMount() {
        // console.log("mounted")
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentProvider.update_message != prevProps.currentProvider.update_message) {
            this.setState({
                message: this.props.currentProvider.update_message
            })
            if (this.props.currentProvider.update_status != prevProps.currentProvider.update_status) {
                this.setState({
                    status: this.props.currentProvider.update_status
                })
            }
        }
    }

    handleOnChange(e) {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit(e,serviceId) {
        e.preventDefault()
        this.props.setProviderMessage(this.props.currentProvider.id, this.state.message)

        if(serviceId != undefined){
            this.props.setServiceStatus(this.props.currentProvider.id,serviceId, this.state.status)
        }
    }

    render() {
        // const provider = this.props.currentProvider

        let provider = this.props.currentProvider
        // let service = this.props.currentProvider.service

        const anotherProvider = this.props.providers.find((aProvider) => this.props.currentProvider.id == aProvider.id)
        // console.log("anotherProvider is ",anotherProvider)
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

                                {/* <div id='service_name'>

                                    <h3>Service Name: {service.name || "No Name"}</h3>
                                    <p>Default Quantity: {service.qty_default}</p>

                                    <form onSubmit={(e)=> {this.handleSubmit(e,service.id)} }>
                                        <p>Set New Quantity:</p>
                                        <button>-</button>
                                        <span> {service.qty_remaining} </span>
                                        <button>+</button>
                                    </form>

                                </div> */}

                                <div id='service_status'>

                                    <h3>Current Service Status: {service.status}</h3>

                                    <form onSubmit={(e)=> {this.handleSubmit(e,service.id)} }>
                                        <p>Set New Service Status:</p>
                                        <input type='text' id='update_status' name='status' onChange={this.handleOnChange} value={service.status} />
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

const mapStateToProps = ({ providers, currentProvider }) => {
    return {
        currentProvider: currentProvider.currentProvider,
        providers: providers.providers
        // currentProvider: providers.providers.find( provider => provider.id == currentProvider.currentProvider.id ) ///
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
        setServiceStatus: (id, status) => {
            return dispatch(setServiceStatus(id, status))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LiveUpdate)