import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addCustomerAction } from "../../Action/customerAction";
import { addCustomer } from "../../Api/CustomerApi";
import PageLayout from "../../Layout";
import { useHistory } from "react-router-dom";

const AddCustomer = ({ addCustomerAction }) => {
  const history = useHistory();
  const initialForm = { name: "", username: "", email: "", phone: "" };
  const [form, setForm] = useState(initialForm);
  const onSubmit = (e) => {
    e.preventDefault();
    addCustomer(form)
      .then((data) => {
        const user = {
          name: form.username,
          username: form.username,
          email: form.email,
          phone: form.phone,
          createdAt: new Date(),
          id: data.id,
        };
        // console.log(data, user);
        addCustomerAction(user);
        history.push("/");
        // alert("customer added");
      })
      .catch(() => alert("error"));
  };
  const onChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };
  return (
    <PageLayout>
      <div className="container">
        <section className="my-5 w-75 mx-auto">
          <h1 className="my-5">Add Users</h1>
          <form onSubmit={onSubmit}>
            <div className="form-group my-3">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                type="text"
                required
                onChange={onChange}
                name="name"
                value={form.name}
                placeholder="Enter name"
                className="form-control"
              />
            </div>

            <div className="form-group my-3">
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                required
                onChange={onChange}
                name="username"
                value={form.username}
                placeholder="Enter username"
                className="form-control"
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                required
                onChange={onChange}
                name="email"
                value={form.email}
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
              value="submit"
              className="btn btn-outline-primary my-4 px-5"
            />
          </form>
        </section>
      </div>
    </PageLayout>
  );
};

AddCustomer.propTypes = {};
const mapDispatchToProps = {
  addCustomerAction: addCustomerAction,
};
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(AddCustomer);
