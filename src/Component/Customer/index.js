import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PageLayout from "../../Layout";
import { Link } from "react-router-dom";
import UsersTable from "./UsersTable";
import { connect } from "react-redux";
import {
  deleteCustomerAction,
  fetchCustomerAction,
} from "../../Action/customerAction";

const Customer = ({ fetchCustomers, customers = [], deleteCustomer }) => {
  const [showCustomers, setShowCustomers] = useState(customers);
  useEffect(() => {
    if (customers.length == 0) fetchCustomers();
  }, []);
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (search.length > 0) {
      const searchCustomers = customers.filter((customer) =>
        check(customer, search)
      );
      setShowCustomers(searchCustomers);
    } else {
      setShowCustomers(customers);
    }
  }, [customers, search]);
  const onDelete = (id) => {
    deleteCustomer(id);
  };
  const check = (customer, search) => {
    return (
      customer.name.toLowerCase().includes(search) ||
      customer.username.toLowerCase().includes(search) ||
      customer.email.toLowerCase().includes(search) ||
      customer.phone.includes(search)
    );
  };

  const onChangeSearch = ({ target }) => {
    setSearch(target.value.toLowerCase());
  };
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
              name="search"
              value={search}
              onChange={onChangeSearch}
            />
          </form>
          <div className="d-flex justify-content-end">
            <Link to="/add" className="btn btn-primary px-5">
              Add Users
            </Link>
          </div>
          <div className="my-4">
            <UsersTable customers={showCustomers} onDelete={onDelete} />
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

Customer.propTypes = {};
const mapDispatchToProps = {
  fetchCustomers: fetchCustomerAction,
  deleteCustomer: deleteCustomerAction,
};
const mapStateToProps = (state) => ({ customers: state.customers });
export default connect(mapStateToProps, mapDispatchToProps)(Customer);
