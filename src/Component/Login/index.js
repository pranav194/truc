import React, { useState } from "react";
import PropTypes from "prop-types";
import PageLayout from "../../Layout";
import { connect } from "react-redux";
import { loginAction } from "../../Action/loginAction";

const Login = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const [form, setForm] = useState({ email: "", password: "" });
  const onChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };
  return (
    <PageLayout>
      <div className="container d-flex justify-content-center align-center">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              onChange={onChange}
              placeholder="email..."
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              onChange={onChange}
              placeholder="password..."
              className="form-control"
            />
          </div>
        </form>
      </div>
    </PageLayout>
  );
};

Login.propTypes = {};
const mapDispatchToProps = {
  login: loginAction,
};
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
