import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { connect } from 'react-redux'

import { getLocation } from '../actions'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    color: 'white',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },

};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="absolute">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={props.toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Getting Started
          </Typography>
          <IconButton onClick={() => { console.log("hello"); props.getLocation() }}>
            <Typography variant="h6" color="white" className={classes.grow}>
              Get Location
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    getLocation: () => {
      return dispatch(getLocation());
    }
  };
};

//   connect(null,mapDispatchToProps)
export default withStyles(styles)(connect(null, mapDispatchToProps)(ButtonAppBar));