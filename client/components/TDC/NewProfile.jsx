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

// import { theBackground, grid_container, profile_header, profole_body } from '../../../public/style'

import { setCurrentProvider, fetchProvider } from "../../actions";

const styles = theme => ({
  // appBar: {
  //     position: 'relative',
  // },
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

class NewProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // console.log("willMount")
  }

  componentDidMount() {
    // console.log("didMount")

    const id = this.props.match.params.id;
    // get the provider from global redux state'
    // console.log("NewProfile cDU id ", id)
    const currentProvider =
      this.props.providers.length > 0 &&
      this.props.providers.find(provider => provider.id == id);
    currentProvider && this.props.setCurrentProvider(currentProvider);

    // const id = this.props.match.params.id;
    // // get the provider from global redux state'
    // console.log("NewProfile cDM id ", id)
    // const currentProvider =
    //   this.props.providers.length > 0 &&
    //   this.props.providers.find(provider => provider.id == id);
    // currentProvider && this.props.setCurrentProvider(currentProvider);

    // get the provider from global redux state'
    // console.log("XXXX-id", id)
    // console.log("DM XXXXXX-providers ", this.props.providers)
    // console.log("XXXXXX-props ", this.props)
    // console.log("XXXX-currentProvider", this.props.provider)
  }

  componentDidUpdate() {

    const id = this.props.match.params.id;
    // get the provider from global redux state'
    // console.log("NewProfile cDU id ", id)
    const currentProvider =
      this.props.providers.length > 0 &&
      this.props.providers.find(provider => provider.id == id);
    currentProvider && this.props.setCurrentProvider(currentProvider);

    // console.log("didUpdate")
    // const id = this.props.match.params.id;
    // // get the provider from global redux state'
    // console.log("NewProfile cDU id ", id)
    // const currentProvider =
    //   this.props.providers.length > 0 &&
    //   this.props.providers.find(provider => provider.id == id);
    // currentProvider && this.props.setCurrentProvider(currentProvider);
  }

  render() {
    let aProvider = this.props.provider;
    // console.log("NewProfile aProvider = ", aProvider)

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

    // let providerServices = [1, 2, 99] // for render

    // console.log("b4 Making services aprovider ", aProvider)

    // if (aProvider.services) {
    //   console.log("Making services")
    //   providerServices = aProvider.services.map((service, i) => {
    //     return (<div className="profile-service" key="service-${i}">

    //       <p key={service.id}><span>Service Name: </span>{service.name}</p>
    //       {/* The service type ID span below needs work, and might need touching up when more IDs are added.. */}
    //       {service.service_type_id < 3 ? <p key={service.id}><span>{service.unit} Remaining: </span>{service.qty_remaining}</p> : ""}
    //       <p key={service.id}><span>Service Status: </span>{service.status}</p>

    //     </div>)
    //   })
    //   console.log("providerServices ::::: ", providerServices)
    // }

    const { classes } = this.props;
    // console.log("Classes:::::::", classes)

    return (
      <React.Fragment>
        <CssBaseline />

        <AppBar />
        <div>
          <img src={aProvider.image_url} />
        </div>
        <Grid container spacing={8} className={classes.outerGrid}>
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
              <div>
                Hours:{" "}
                {aProvider.hours
                  ? aProvider.hours
                    .split("<br>")
                    .map((item, i) => <p key={"time" + i}>{item}</p>)
                  : ""}
              </div>
              <div>
                {aProvider.update_message ? aProvider.update_message : ""}
              </div>
              <div>
                {aProvider.description
                  ? aProvider.description
                    .split("<br>")
                    .map((item, i) => <p key={"desc" + i}>{item}</p>)
                  : ""}
              </div>

              <h4>Services Offered</h4>
              {
                // console.log("ps>>>>>", providerServices)
                // {providerServices}
                aProvider.services && aProvider.services.map(service => {
                  return (<div className="profile-service">

                    <p key={service.id}><span>Service Name: </span>{service.name}</p>
                    {/* The service type ID span below needs work, and might need touching up when more IDs are added.. */}
                    {service.service_type_id < 3 ? <p key={service.id}><span>{service.unit} Remaining: </span>{service.qty_remaining}</p> : ""}
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
)(NewProfile));
