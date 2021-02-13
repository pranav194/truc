import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editCustomerAction } from "../../Action/customerAction";

const EditCustomer = (props) => {
  return <div></div>;
};

EditCustomer.propTypes = {};

const mapDispatchToProps = {
  editCustomer: editCustomerAction,
};
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(EditCustomer);
