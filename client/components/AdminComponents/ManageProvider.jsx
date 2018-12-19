// CHILD OF ADMIN

import React from 'react'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import AppBar from '../AppBar'
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { saveProvider, fetchProvider, getLocation } from '../../actions'

import ManageService from './ManageService'

const styles = theme => ({
    // appBar: {
    //     position: 'relative',
    // },
    outerGrid: {
        marginTop: '80px',
    }
})

class ManageProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            provider: {
                id: '',
                name: "",
                description: "",
                lat: "",
                long: "",
                hours: "",
                address: "",
                email: "",
                website_url: "",
                update_message: "",
                image_url: ""
            },
            showNewServiceForm: false,
            otherStateThings: "",

        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.routeChanged = this.routeChanged.bind(this);
        this.showAddServiceForm = this.showAddServiceForm.bind(this);
        this.getLatLong = this.getLatLong.bind(this)


    }
    onChange(e) {
        // console.log("AddProvider onchange e = ", e)
        this.setState({
            provider: {
                ...this.state.provider,
                [e.target.name]: e.target.value
            }
        }
        )
    }

    getLatLong() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                // console.log(position)
                this.setState({
                    provider: {
                        ...this.state.provider,
                        lat: position.coords.latitude,
                        long: position.coords.longitude
                    }

                })
            })
        }
    }
    onSubmit(e) {
        e.preventDefault();
        // console.log("save provider: ", this.state)
        // console.log("Saving this.state -----------------> ", this.state)
        this.props.saveProvider(this.state.provider)
        // .then(
        // console.log("NOT THENed, no promise! Saved this.state -----------------> REDIRECT? ID = ", this.props.currentProvider.id)
        // )
    }

    componentDidMount() {
        const id = this.props.match.params.id
        // console.log("XXXXXXXX Manager provider id is ", id || "EMPTY!!", this.props)
        if (id != "new") {
            // this.setState({ providerId: id })
            this.props.fetchProvider(id)
        }
        // if (this.props.currentProvider) {
        //     console.log("Current Provider CDM >>>>>>>> ", this.props.currentProvider)
        //     this.setState({ ...this.props.currentProvider })
        // }
        // if (this.props.currentProvider) {
        // console.log("Current Provider CDM >>>>>>>> ", this.props.currentProvider)
        //     if (this.props.currentProvider.id && this.props.currentProvider != prevProps.currentProvider)
        //         this.setState({ ...this.props.currentProvider })
        // }

        // console.log(this.props)

        if (this.props.history) {
            // console.log('tracking history')
            this.props.history.listen(this.routeChanged)
        }

        if (this.props.currentProvider.services && this.props.currentProvider.services.length == 0) {
            this.setState({
                showNewServiceForm: true
            })
        }

    }

    routeChanged(params) {
        // console.log('route change', params)
    }

    showAddServiceForm(e) {
        this.setState({
            showNewServiceForm: true
        })
    }

    // if (this.props.currentProvider.id) {
    componentDidUpdate(prevProps) {
        // console.log("Current Provider CDU _______ ", this.props.currentProvider, this.state)

        if (this.props.currentProvider.id && this.props.currentProvider != prevProps.currentProvider) {
            // console.log("Current Provider CDU XXXXXXX ", this.props.currentProvider, this.state)
            // console.log("Have current Provider: ", this.props.currentProvider)
            this.setState({
                provider: { ...this.props.currentProvider }
            })
            this.props.history.push(`/admin/providers/${this.props.currentProvider.id}`)
        } else {
            // console.log("No Current Provider CDU >>>>>> ", this.props.currentProvider, this.state)
        }

        // }
    }


    render() {
        // console.log("state!!!!!!:::", this.state)
        if (this.props.currentProvider && this.props.currentProvider.id) {
            // console.log("Current Provider ?????, should I redirect?", this.props.currentProvider)
            // return <Redirect to={`/admin/providers/${this.props.currentProvider.id}`} />
        } // else

        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline />
                {/* <AppBar /> */}
                <Grid container spacing={8} className={classes.outerGrid}>
                    <Grid container alignItems="center" justify="center">
                        <Paper style={{ width: "400px" }}>
                            <div>
                                {this.props.currentProvider && this.props.currentProvider.id && <Link to={`/profile/${this.props.currentProvider.id}`}>View Profile</Link>

                                }
                                <form onSubmit={this.onSubmit}>
                                    <legend>Provider Details</legend>
                                    <fieldset>
                                        <p>
                                            <label htmlFor="name">Name:</label>
                                            <input type="name" name="name" id="text" onChange={this.onChange} value={this.state.provider.name || ""} /></p>

                                        <p>
                                            <label htmlFor="description">Description:</label>
                                            <input type="text" name="description" onChange={this.onChange} value={this.state.provider.description || ""} /></p>

                                        <p>
                                            <label htmlFor="address">Address:</label>
                                            <input type="text" name="address" id="text" onChange={this.onChange} value={this.state.provider.address || ""} /> </p>

                                        <p><label htmlFor="image_url">Image URL:</label>
                                            <input type="text" name="image_url" id="text" onChange={this.onChange} value={this.state.provider.image_url || ""} /></p>
                                        <p>
                                            <label htmlFor="phone">Phone:</label>
                                            <input type="tel" name="phone" id="text" onChange={this.onChange} value={this.state.provider.phone || ""} /></p>
                                        <p>
                                            <label htmlFor="email">Email:</label>
                                            <input type="email" name="email" id="text" onChange={this.onChange} value={this.state.provider.email || ""} /></p>

                                        <p>
                                            <label htmlFor="website_url">Website URL:</label>
                                            <input type="text" name="website_url" id="text" onChange={this.onChange} value={this.state.provider.website_url || ""} /></p>
                                        <p>
                                            <label htmlFor="hours">Hours:</label>
                                            <input type="text" name="hours" id="text" onChange={this.onChange} value={this.state.provider.hours || ""} /></p>
                                        <p>
                                            <label htmlFor="update_message">Update Message:</label>
                                            <input type="text" name="update_message" id="text" onChange={this.onChange} value={this.state.provider.update_message || ""} /></p>

                                        <button onClick={this.getLatLong}>Get my location</button>
                                        <p>
                                            <label htmlFor="lat">Latitude:</label>
                                            <input type="text" id="lat" name="lat" id="text" onChange={this.onChange} value={this.state.provider.lat || ""} /></p>
                                        <p>
                                            <label htmlFor="long">Longitude:</label>
                                            <input type="text" id="long" name="long" id="text" onChange={this.onChange} value={this.state.provider.long || ""} /></p>


                                        <button type="submit">Submit</button>

                                    </fieldset>


                                </form>

                                {/* if new provider (no this.props.currentProvider.id), the don't show service form */}

                                {this.props.currentProvider.id && this.props.currentProvider.services.length > 0 && this.props.currentProvider.services.map(service => {
                                    // console.log("hi")
                                    return <ManageService key={service.id} service={service} />
                                })
                                }
                                {!this.state.showNewServiceForm && this.props.currentProvider.id && <button onClick={this.showAddServiceForm}>Add service</button>}

                                {this.state.showNewServiceForm && this.props.currentProvider.id && <ManageService provider_id={this.props.currentProvider.id} />
                                }


                            </div>
                        </Paper>
                    </Grid>
                </Grid >

            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ currentProvider }) => {
    return {
        currentProvider: currentProvider.currentProvider
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveProvider: providerInfo => {
            return dispatch(saveProvider(providerInfo));
        },
        fetchProvider: (params) => {
            return dispatch(fetchProvider(params))
        }
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ManageProvider))