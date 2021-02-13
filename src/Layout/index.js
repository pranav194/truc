import React from "react";
import PropTypes from "prop-types";

const PageLayout = (props) => {
  return <div className="min-vh-100">{props.children}</div>;
};

PageLayout.propTypes = {};

export default PageLayout;
