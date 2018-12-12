import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import Map from "./Map";
import Admin from "./Admin";
import Sidebar from "./TDC/Sidebar";
import ManageProvider from "./AdminComponents/ManageProvider";
import LiveUpdate from "./AdminComponents/LiveUpdate";
import Profile from "./TDC/Profile";

import {
  fetchProvidersAndServices,
  timerStart,
  timerStop,
  timerCountUpdate
} from "../actions";

import LogIn from "./TDC/LogIn";

function getProviders(dispatch) {
  dispatch(fetchProvidersAndServices());
}

class App extends React.Component {
  constructor(props) {
    super(props);
    // console.log("App Const props< ", props)
    // console.log("App Const this.props< ", this.props)


    // this.getProviders = this.getProviders.bind(this)
  }

  componentDidMount() {
    // console.log("APP CDM props>>>>>>>> ", props)
    // console.log("APP CDM this.props>>>>>>>> ", this.props)

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
          {/* Admin Profile has the ability to edit the profile, depending on the auth of the admin user */}
          {/* <Route exact path="/admin/providers/new" component={ManageProvider} />
          <Route exact path="/admin/providers/new" component={ManageService} /> */}
          {/* <Route exact path="/admin/providers/:id" component={ManageProviderServices} /> */}
          <Route exact path="/admin/providers/:id" component={ManageProvider} />
          {/* <Route exact path="/admin/providers/:id" render={() => <ManageProvider {...this.props} />} /> */}
          {/* <Route exact path="/admin/:id" component={AdminProfile} /> */}
          {/* <Route exact path="/admin/:id/edit" component={EditProfile} /> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
