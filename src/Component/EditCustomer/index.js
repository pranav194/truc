import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  editCustomerAction,
  fetchCustomerAction,
} from "../../Action/customerAction";
import { useLocation } from "react-router-dom";
import PageLayout from "../../Layout";

const EditCustomer = ({
  editCustomerAction,
  customers,
  fetchCustomers,
  history,
}) => {
  useEffect(() => {
    if (customers.length == 0) {
      fetchCustomers();
    }
  }, []);
  const location = useLocation();
  const pathName = location.pathname;
  const id = pathName.split("/")[2];
  const initialForm = {
    name: "",
    username: "",
    email: "",
    phone: "",
  };
  const [form, setForm] = useState(initialForm);
  useEffect(() => {
    const customer = customers.find((cus) => cus.id == id);
    setForm(customer || initialForm);
    console.log(customer);
  }, [customers]);

  const onSubmit = (e) => {
    e.preventDefault();

    editCustomerAction({ id, form });
    history.push("/");
  };
  const onChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };
  return (
    <PageLayout>
      <div className="container">
        <section className="my-5 w-75 mx-auto">
          <h1 className="my-5">Edit User</h1>
          <form onSubmit={onSubmit}>
            <div className="form-group my-3">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={onChange}
                name="name"
                placeholder="Enter name"
                className="form-control"
              />
            </div>

            <div className="form-group my-3">
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                required
                value={form.username}
                onChange={onChange}
                name="username"
                placeholder="Enter username"
                className="form-control"
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={onChange}
                name="email"
                placeholder="Enter email"
                className="form-control"
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                required
                value={form.phone}
                onChange={onChange}
                name="phone"
                placeholder="Enter phone"
                className="form-control"
              />
            </div>
            <input
              type="submit"
              value="Update"
              className="btn btn-outline-success my-4 px-5"
            />
          </form>
        </section>
      </div>
    </PageLayout>
  );
};

EditCustomer.propTypes = {};

const mapDispatchToProps = {
  editCustomerAction: editCustomerAction,
  fetchCustomers: fetchCustomerAction,
};
const mapStateToProps = (state, ownProps) => ({
  customers: state.customers,
});
export default connect(mapStateToProps, mapDispatchToProps)(EditCustomer);
