import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutAction } from "../Action/loginAction";
import { Link } from "react-router-dom";
const PageLayout = ({ logout, loggedIn, ...props }) => {
  return (
    <>
      <div className="container">
        <header className="d-flex justify-content-end align-items-end">
          <Link
            to="/login"
            onClick={() => {
              if (loggedIn) {
                logout();
              }
            }}
          >
            {loggedIn ? "Logout" : "Login"}
          </Link>
        </header>
      </div>
      <div className="min-vh-100">{props.children}</div>
    </>
  );
};

PageLayout.propTypes = {};
const mapDispatchToProps = {
  logout: logoutAction,
};
const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
});

export default connect(mapStateToProps, mapDispatchToProps)(PageLayout);
