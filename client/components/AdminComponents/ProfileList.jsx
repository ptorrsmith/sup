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

const styles = theme => ({
    outerGrid: {
        marginTop: '20px',
    }
})

class ProfileList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {

        this.props.fetchProvidersAndServices()
    }

    componentDidMount() {

    }

    componentDidUpdate() {
    }



    render() {
        const providersAndServices = this.props.providers.providers

        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline />
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