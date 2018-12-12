import React from "react";


import { HashRouter as Router, Route, Link } from "react-router-dom";
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

    const sideList = (
      <div className={classes.list}>
        <div className={classes.drawerHeader}>

          <img src="/images/Logo.png" />
        </div>

        <Divider />
        <SimpleExpansionPanel />
        <Divider />
        <List>
          {[{ name: "Log in", link: "/login" }, { name: "Register", link: "/register" }].map((item, index) => (
            <ListItem button key={item.name}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}

              {/* <Button onClick={() => { location = "#/login" }}> */}
              <ListItemText onClick={() => { location = "#/login" }} primary={item.name} />
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
        </SwipeableDrawer>
      </div>
    );
  }
}

SwipeableDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
