import React from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import { setCurrentProvider, fetchProvider } from "../../actions";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import CenteredGrid from './CenteredGrid';
import AppBar from "../AppBar"

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },

    mainGrid: {
        marginTop: theme.spacing.unit * 3,
    },

    outerGrid: {
        marginTop: '80px',
    }
});

class Profile extends React.Component {
    state = {
        open: true,
    };


    componentDidUpdate() {
        const id = this.props.match.params.id || 2;

        // get the provider from global redux state'
        const currentProvider =
            this.props.providers.length > 0 &&
            this.props.providers.find(provider => provider.id == id);
        currentProvider && this.props.setCurrentProvider(currentProvider);
    }

    render() {
        const { classes } = this.props;
        let aProvider = this.props.provider;

        let liveProvider = this.props.providers.find(
            item => item.id == aProvider.id
        );
        if (liveProvider) {
            aProvider = liveProvider;
        }

        if (!aProvider) {
            aProvider = {
                id: 1,
                name: "Temp default provider",
                description: "Somthing isnt quite lining up",
                address: "??????",
                phone: "(04) ...---...",
                update_message: "not really functional",
                lat: -41.300598,
                long: 174.774082,
                email: "BlameBarry@Garry.com",
                website_url: "http://ComputerSaysNo.org.nz/",
                hours: "Open: untill something changes",
                services: []
            };
        }

        let services = [];
        if (aProvider.services) {
            services = aProvider.services.map(() => { });
        }
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar />

                <Grid container spacing={8} className={classes.outerGrid}>
                    <Grid item md={6}>
                        <Paper>
                            <div >
                                <img style={{ maxWidth: "100%" }} src={aProvider.image_url} />
                            </div>
                            <Typography variant="h4" gutterBottom component="h2">
                                {aProvider.name ? aProvider.name : ""}
                            </Typography>
                            <body1>{aProvider.address ? aProvider.address : ""}</body1><br />
                            <body1>{aProvider.phone ? aProvider.phone : ""}</body1><br />
                            <body1>
                                Site:{" "}
                                {aProvider.website_url ? (
                                    <a href={aProvider.website_url}>{aProvider.name}</a>
                                ) : (
                                        ""
                                    )}
                            </body1><br />
                            Hours:{" "}
                            {aProvider.hours
                                ? aProvider.hours
                                    .split("<br>")
                                    .map((item, i) => <p key={"time" + i}>{item}</p>)
                                : ""}
                        </Paper>
                    </Grid>
                    <Divider />
                    <Grid item md={6}>

                        <Typography variant="h6" gutterBottom component="h2">
                            <strong>Important Messages:</strong> {aProvider.update_message ? aProvider.update_message : ""}

                        </Typography>
                        <Divider />
                        <div>
                            <div>
                                {aProvider.description
                                    ? aProvider.description
                                        .split("<br>")
                                        .map((item, i) => <p key={"desc" + i}>{item}</p>)
                                    : ""}

                            </div>
                            <strong>Services Offered:</strong>
                            <Grid container>
                                {aProvider.services && aProvider.services.map(service => {

                                    return (<Grid item={6}><div className="profile-service">

                                        <h3 key={service.id}><span>Service Name: </span>{service.name}</h3>
                                        <body1 key={service.id}><span>{service.unit} Remaining: </span>{service.qty_remaining}</body1>
                                        <h3 key={service.id}><span>Service Status: </span>{service.status}</h3>

                                    </div></Grid>)


                                })}
                            </Grid>
                        </div>
                    </Grid>

                </Grid>
                {/* </main> */}
            </div >

        );

    }
}


Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        provider: state.currentProvider.currentProvider,
        providers: state.providers.providers
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProvider: params => {
            return dispatch(fetchProvider(params));
        },
        setCurrentProvider: params => {
            return dispatch(setCurrentProvider(params));
        }
    };
};


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Profile));