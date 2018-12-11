import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import Map from "./Map";
import Admin from "./Admin";
import Sidebar from "./TDC/Sidebar";
import ManageProvider from "./AdminComponents/ManageProvider";
import LiveUpdate from "./AdminComponents/LiveUpdate";
import Profile from "./TDC/Profile";
import ManageService from "./AdminComponents/ManageService";

import {
  fetchProvidersAndServices,
  timerStart,
  timerStop,
  timerCountUpdate
} from "../actions";

import ManageProviderServices from "./AdminComponents/ManageProviderServices";

function getProviders(dispatch) {
  dispatch(fetchProvidersAndServices());
}

class App extends React.Component {
  constructor(props) {
    super(props);

    // this.getProviders = this.getProviders.bind(this)
  }

  componentDidMount() {
    this.props.fetchProvidersAndServices();

    //if not given a function to do it just console logs that it has ticked
    this.props.startTimer(() => {
      let count = this.props.timer.count + 1;

      if (count > 60) {
        this.props.stopTimer();
      }
      this.props.updateCount(count);
      this.props.fetchProvidersAndServices();
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Sidebar} />
          <Route exact path="/" component={Map} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/admin/providers/new" component={ManageProvider} />
          <Route exact path="/admin/providers/new" component={ManageService} />
          <Route exact path="/admin/providers/new" component={ManageProviderServices} />
          {/* <Route
            exact
            path="/admin/providers/:id"
            component={ManageProviderServices}
          /> */}
          <Route exact path="/liveupdate/:id" component={LiveUpdate} />
          <Route exact path="/profile/:id" component={Profile} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    timer: state.timer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProvidersAndServices: params => {
      return dispatch(fetchProvidersAndServices(params));
    },
    startTimer: func => {
      return dispatch(timerStart(func));
    },
    stopTimer: () => {
      return dispatch(timerStop());
    },
    updateCount: count => {
      return dispatch(timerCountUpdate(count));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
