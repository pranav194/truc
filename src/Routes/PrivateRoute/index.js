import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, loggedIn, path, ...rest }) => (
  <Route
    {...rest}
    path={path}
    render={(props) =>
      loggedIn.token ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

PrivateRoute.propTypes = {};

const matchStateToProps = (state) => ({
  loggedIn: state.loggedIn,
});
export default connect(matchStateToProps)(PrivateRoute);
