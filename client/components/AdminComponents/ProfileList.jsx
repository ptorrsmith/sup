// CHILD OF ADMIN

// IMPORTS

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
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProvidersAndServices } from '../../actions'

// IMPORT TEMPORARY DATA TO USE AS BASE FOR THIS
// import providersAndServices from '../../utils/exampleData'
const styles = theme => ({
    // appBar: {
    //     position: 'relative',
    // },
    outerGrid: {
        marginTop: '20px',
    }
})

class ProfileList extends React.Component {
    constructor(props) {
        super(props)

        // set initial state
        // no local state?


        // bind functions

    }

    componentWillMount() {
        // console.log("Will mount")

        this.props.fetchProvidersAndServices()
    }

    componentDidMount() {
        // console.log("mounted")
        // fetchProvidersAndServices()

    }

    componentDidUpdate() {
        // console.log("updated")
        // const id = this.props.match.params.id;
        // // get the provider from global redux state'
        // const currentProvider =
        //     this.props.providers.length > 0 &&
        //     this.props.providers.find(provider => provider.id == id);
        // currentProvider && this.props.setCurrentProvider(currentProvider);
    }



    render() {
        const providersAndServices = this.props.providers.providers
        // console.log("ProfileList render providersAndServices >>>> ", providersAndServices)

        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline />
                {/* <AppBar /> */}
                <Grid container spacing={8} className={classes.outerGrid}>
                    <Grid container alignItems="center" justify="center">
                        <Paper >
                            <Typography variant="h4" gutterBottom>
                                Admin Page
                            </Typography>
                            <div className="adminPage">
                                <div className="profile_list_body">
                                    <Typography variant="subheading" gutterBottom>Welcome to the Admin Panel. This list displays all current providers and services in Wellington.</Typography>

                                    {providersAndServices && providersAndServices.map((provider, i) => {
                                        return <div className="adminForm-provider" key={i}>
                                            <Typography gutterBottom>{provider.name}</Typography>
                                            <Typography gutterBottom>{provider.hours}</Typography> <Typography gutterBottom>{provider.address} </Typography>
                                            <Typography gutterBottom>{provider.update_message}</Typography>
                                            <Link to={`/profile/${provider.id}`}>Profile</Link> | <Link to={`/admin/providers/${provider.id}`}>Edit</Link> | <Link to={`/liveupdate/${provider.id}`}>LiveUpdate</Link>
                                            <br />
                                            <Typography gutterBottom>{provider.services.length} Services:</Typography>
                                            <ul>
                                                {provider.services.map((service, j) => {
                                                    return <li key={j}>
                                                        {/* <Link to={`/admin/service/${service.id}`}>{service.name}</Link> */}
                                                        <Typography gutterBottom>{service.name}
                                                        </Typography>
                                                    </li>

                                                })}
                                            </ul>
                                        </div>
                                    })}


                                </div>

                            </div>
                        </Paper>
                    </Grid>
                </Grid >
            </React.Fragment>
        )
    }
}


const mapStateToProps = ({ currentProvider, providers }) => {
    return {
        currentProvider,
        providers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProvidersAndServices: (params) => {
            return dispatch(fetchProvidersAndServices(params))
        }
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ProfileList))