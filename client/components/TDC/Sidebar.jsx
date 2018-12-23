import React from "react";


import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from '@material-ui/core/Drawer';
import AppBar from "../AppBar"
// import Logo from "../../../public/images/Logo"


import SimpleExpansionPanel from "./SimpleExpansionPanel";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
};

class Sidebar extends React.Component {
  state = {
    top: false,
    left: true,
    bottom: false,
    right: false
  };

  toggleDrawer = (side, open) => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;


    let legendInfo = [
      { text: "Advice", image: "images/advice.svg" },
      { text: "Bed", image: "images/bed.svg" },
      { text: "Drop In", image: "images/dropin.svg" },
      { text: "Food Bank", image: "images/foodbank.svg" },
      { text: "Current Location", image: "images/location.svg" },
      { text: "Medical", image: "images/medical.svg" },
      { text: "Meals", image: "images/soup.svg" }
    ]
    let legendEntries = legendInfo.map((item) => {
      return (
        <div>
          <Typography className={classes.heading}>Legend</Typography>
          <object type="image/svg+xml" style={{ width: "50px", height: "50px" }} data={item.image} class="logo">
          </object>
          <span>{item.text}</span>
        </div>
      )
    })


    let links = []

    const showNavLinks = true;
    let showAdmin = false;
    let showProfile = false;
    const showLogin = true;
    const showRegister = false;

    const providerId = this.props.auth.providerId || 0
    if (providerId < 0) {
      showAdmin = true;
    }
    if (providerId > 0) {
      showProfile = true;
    }


    if (showNavLinks) {
      links.push({ name: "Home", link: "#" })
    }
    if (showAdmin) {
      links.push({ name: "Admin", link: "#/admin" })
    }
    if (showProfile) {
      links.push({ name: "Services Update", link: "#/liveupdate/" + providerId })
      links.push({ name: "Profile Update", link: "#/admin/providers/" + providerId })
    }
    if (showLogin) {
      links.push({ name: "Log in", link: "#/login" })
    }
    if (showRegister) {
      links.push({ name: "Register", link: "#/admin/providers/new" })
    }

    const sideList = (
      <div className={classes.list}>
        <div className={classes.drawerHeader}>

          <img src="/images/Logo.png" />
        </div>

        <Divider />
        <SimpleExpansionPanel />
        <Divider />
        <List>
          {links.map((item, index) => (
            <ListItem button key={item.name}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}

              {/* <Button onClick={() => { location = "#/login" }}> */}
              <ListItemText onClick={() => { location = item.link }} primary={item.name} />
              {/* </Button> */}
            </ListItem>
          ))}
        </List>
      </div >
    );

    return (
      <div>

        <AppBar toggleDrawer={() => { this.toggleDrawer("left", true) }} />
        {/* Open Left</AppBar> */}
        {/* <AppBar/> */}
        <SwipeableDrawer
          open={this.state.left}
          onClose={() => this.toggleDrawer("left", false)}
          onOpen={() => this.toggleDrawer("left", true)}
        >
          <div
            tabIndex={0}
            role="button"
            // onClick={() => this.toggleDrawer('left', false)}
            onKeyDown={() => this.toggleDrawer("left", false)}
          >
            {sideList}
          </div>

          <Divider />
          {legendEntries}
        </SwipeableDrawer>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

SwipeableDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(connect(mapStateToProps)(Sidebar));
