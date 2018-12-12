import React from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import { setCurrentProvider, fetchProvider } from "../../actions";

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },


    appBar: {
        // zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    title: {
        flexGrow: 1,
    },

    // appBarSpacer: theme.mixins.toolbar,
    // content: {
    //     flexGrow: 1,
    //     padding: theme.spacing.unit * 3,
    //     height: '100vh',
    //     overflow: 'auto',
    // },
    h5: {
        marginBottom: theme.spacing.unit * 2,
    },
});

// class Profile extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     componentDidMount() {
//         const id = this.props.match.params.id;
//     }

//     componentDidUpdate() {
//         const id = this.props.match.params.id;
//         // get the provider from global redux state'
//         const currentProvider =
//             this.props.providers.length > 0 &&
//             this.props.providers.find(provider => provider.id == id);
//         currentProvider && this.props.setCurrentProvider(currentProvider);
//     }

//     render() {
//         let aProvider = this.props.provider;

//         let liveProvider = this.props.providers.find(
//             item => item.id == aProvider.id
//         );
//         if (liveProvider) {
//             aProvider = liveProvider;
//         }

//         if (!aProvider) {
//             aProvider = {
//                 id: 1,
//                 name: "Temp default provider",
//                 description: "Somthing isnt quite lining up",
//                 address: "??????",
//                 phone: "(04) ...---...",
//                 update_message: "not really functional",
//                 lat: -41.300598,
//                 long: 174.774082,
//                 email: "BlameBarry@Garry.com",
//                 website_url: "http://ComputerSaysNo.org.nz/",
//                 hours: "Open: untill something changes",
//                 services: []
//             };
//         }

//         let services = [];
//         if (aProvider.services) {
//             services = aProvider.services.map(() => { });
//         }

class Profile extends React.Component {
    state = {
        open: true,
    };


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
                <AppBar
                    position="absolute"
                >


                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={classes.title}
                    >
                        Meet the Provider
            </Typography>
                </AppBar>
                <Divider />
                <Divider />

                <main className={classes.content}>
                    <img src="/images/img-1.jpeg" className="profileImage" />
                    <Divider />
                    <Typography variant="h4" gutterBottom component="h2">
                        <h3>{aProvider.name ? aProvider.name : ""}</h3>
                        <p>{aProvider.address ? aProvider.address : ""}</p>
                        <p>{aProvider.phone ? aProvider.phone : ""}</p>
                        <p>
                            Site:{" "}
                            {aProvider.website_url ? (
                                <a href={aProvider.website_url}>{aProvider.name}</a>
                            ) : (
                                    ""
                                )}
                        </p>
                    </Typography>
                    <Divider />
                    <Typography component="div" className={classes.chartContainer}>
                        Hours:{" "}
                        {aProvider.hours
                            ? aProvider.hours
                                .split("<br>")
                                .map((item, i) => <p key={"time" + i}>{item}</p>)
                            : ""}
                    </Typography>
                    <Divider />
                    <Typography variant="h4" gutterBottom component="h2">
                        {aProvider.update_message ? aProvider.update_message : ""}
                        <Divider />
                        <div>
                            <div>
                                {aProvider.description
                                    ? aProvider.description
                                        .split("<br>")
                                        .map((item, i) => <p key={"desc" + i}>{item}</p>)
                                    : ""}
                            </div>
                            Services Offered
                            {aProvider.services && aProvider.services.map(service => {
                                return (<div className="profile-service">

                                    <h6 key={service.id}><span>Service Name: </span>{service.name}</h6>
                                    <body1 key={service.id}><span>{service.unit} Remaining: </span>{service.qty_remaining}</body1>
                                    <h6 key={service.id}><span>Service Status: </span>{service.status}</h6>
                                </div>)
                            })}
                        </div>
                    </Typography>


                </main>
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