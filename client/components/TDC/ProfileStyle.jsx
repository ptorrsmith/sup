import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import Grid from '@material-ui/core/grid';


import { HashRouter as Router, Route, Link } from "react-router-dom";




const styles = theme => ({
  root: {
    display: 'flex',
  },
  
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  }
});

class Dashboard extends React.Component {
  state = {
    open: true,
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          // position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
            Meet the Provider:
            </Typography>
          </Toolbar>
          

          <Link to="/">
          <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
          Home
          </Typography>
          </Link>
          </Grid>
        </AppBar>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Typography variant="h4" gutterBottom component="h2">

            {/* update profile box here */}

          </Typography>
          <Typography component="div" className={classes.chartContainer}>
          </Typography>
          <Typography variant="h4" gutterBottom component="h2">

            {/* Address box here */}
            
          </Typography>
        </main>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);