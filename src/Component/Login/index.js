import React, { useState } from "react";
import PropTypes from "prop-types";
import PageLayout from "../../Layout";
import { connect } from "react-redux";
import { loginAction } from "../../Action/loginAction";
import { Link, useHistory } from "react-router-dom";
import * as AuthApi from "../../Api/AuthApi";
const Login = ({ loginA }) => {
  const history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    AuthApi.loginUser(login)
      .then((data) => {
        console.log(data);
        loginA(data);
        history.push("");
      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data.error);
      });
  };
  const [login, setLogin] = useState({ email: "", password: "" });
  const onChange = ({ target }) => {
    setLogin({ ...login, [target.name]: target.value });
  };
  return (
    <PageLayout>
      <section>
        <div className="container min-vh-100 d-flex justify-content-center align-items-center">
          <div className="card text-center shadow-lg w-50">
            <h2 className="mb-5 mt-4">Login</h2>

            <form className="form my-3 w-75 mx-auto" onSubmit={onSubmit}>
              <div className="form-group my-3">
                {/* <label className="label"> Name</label> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email..."
                  name="email"
                  required
                  onChange={onChange}
                  value={login.email}
                />
              </div>

              <div className="form-group text- my-3">
                {/* <label className="label"> Name</label> */}
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password..."
                  name="password"
                  required
                  onChange={onChange}
                  value={login.password}
                />
              </div>

              <input
                type="submit"
                className="mt-4 btn btn-outline-primary px-5 mx-auto"
                value="Login"
              />
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

Login.propTypes = {};
const mapDispatchToProps = {
  loginA: loginAction,
};
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
