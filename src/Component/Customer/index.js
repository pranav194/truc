import React, { useEffect } from "react";
import PropTypes from "prop-types";
import PageLayout from "../../Layout";
import { Link } from "react-router-dom";
import UsersTable from "./UsersTable";
import { connect } from "react-redux";
import { fetchCustomerAction } from "../../Action/customerAction";
// import * as CustomerApi from "../../Api/CustomerApi";
const Customer = ({ fetchCustomer, customers }) => {
  useEffect(() => {
    fetchCustomer();
  }, []);
  return (
    <PageLayout>
      <div className="container">
        <section>
          <h1>My Customers</h1>
          <form onSubmit={() => {}} className="my-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search for users"
            />
          </form>
          <div className="d-flex justify-content-end">
            <Link className="btn btn-primary px-5">Add Users</Link>
          </div>
          <div className="my-4">
            <UsersTable customers={customers} />
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

Customer.propTypes = {};
const mapDispatchToProps = {
  fetchCustomer: fetchCustomerAction,
};
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Customer);
