import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addCustomerAction,
  fetchCustomerAction,
} from "../../Action/customerAction";

const AddCustomer = (props) => {
  return <div></div>;
};

AddCustomer.propTypes = {};
const mapDispatchToProps = {
  addCustomers: addCustomerAction,
};
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(AddCustomer);
