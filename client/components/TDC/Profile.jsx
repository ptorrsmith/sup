import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';

import Toolbar from '@material-ui/core/Toolbar';
import Divider from "@material-ui/core/Divider";

import AppBar from '../AppBar'


import { setCurrentProvider, fetchProvider } from "../../actions";

const styles = theme => ({

  outerGrid: {
    marginTop: '80px',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 20,
    marginBottom: theme.spacing.unit * 20,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 20,
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentDidMount() {

    const id = this.props.match.params.id;
    // get the provider from global redux state'
    const currentProvider =
      this.props.providers.length > 0 &&
      this.props.providers.find(provider => provider.id == id);
    currentProvider && this.props.setCurrentProvider(currentProvider);

  }

  componentDidUpdate() {

    const id = this.props.match.params.id;
    // get the provider from global redux state'
    const currentProvider =
      this.props.providers.length > 0 &&
      this.props.providers.find(provider => provider.id == id);
    currentProvider && this.props.setCurrentProvider(currentProvider);

  }

  render() {
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
        hours: "Open: until something changes",
        services: []
      };
    }

    let services = [];
    if (aProvider.services) {
      services = aProvider.services.map(() => { });
    }

    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />

        <AppBar />
        <div>
          <img src={aProvider.image_url} />
        </div>
        <Grid container spacing={2} className={classes.outerGrid}>
          <Grid container alignItems="center" justify="center">
            <Paper >
              <Typography variant="h4" gutterBottom>
                {aProvider.name ? aProvider.name : ""}
              </Typography>
              <Typography variant="h5" gutterBottom>{aProvider.address ? aProvider.address : ""}</Typography>
              <Typography variant="h5" gutterBottom>{aProvider.phone ? aProvider.phone : ""}</Typography>

              <Typography variant="h6" gutterBottom>
                Web: {aProvider.website_url ? (
                  <a href={aProvider.website_url}>{aProvider.name}</a>
                ) : (
                    ""
                  )}
              </Typography>
              <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                  Hours:{" "}
                  {aProvider.hours
                    ? aProvider.hours
                      .split("<br>")
                      .map((item, i) => <p key={"time" + i}>{item}</p>)
                    : ""}
                </Grid>
                <Grid item xs={12} sm={6}>
                  {aProvider.update_message ? aProvider.update_message : ""}
                </Grid>
                <Grid item xs={12} sm={6}>
                  {aProvider.description
                    ? aProvider.description
                      .split("<br>")
                      .map((item, i) => <p key={"desc" + i}>{item}</p>)
                    : ""}
                </Grid>
              </Grid>

              <h4>Services Offered</h4>
              {
                aProvider.services && aProvider.services.map(service => {
                  return (<div className="profile-service">

                    <p key={service.id}><span>Service Name: </span>{service.name}</p>
                    {/* The service type ID span below needs work, and might need touching up when more IDs are added.. */}
                    {service.service_type_id < 3 ? <p key={service.id}><span>{service.unit} Remaining </span>{service.qty_remaining}</p> : ""}
                    <p key={service.id}><span>Service Status: </span>{service.status}</p>

                  </div>)
                })
              }
              <Link to={`/admin/providers/${aProvider.id}`}>Edit</Link>
              <br />
              <Link to={`/liveupdate/${aProvider.id}`}>LiveUpdate</Link>
            </Paper>
          </Grid>
        </Grid >
      </React.Fragment >

    )


  }

}

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

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile));
