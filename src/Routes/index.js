import React from "react";
import { Route } from "react-router-dom";
import AddCustomer from "../Component/AddCustomer";
import Customer from "../Component/Customer";
import EditCustomer from "../Component/EditCustomer";
import Login from "../Component/Login";
import Register from "../Component/Register";
import PrivateRoute from "./PrivateRoute";
export default function AppRoute() {
  return (
    <>
      <PrivateRoute exact path="/" component={Customer} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/edit/:slug" component={EditCustomer} />
      <PrivateRoute exact path="/add" component={AddCustomer} />
    </>
  );
}
