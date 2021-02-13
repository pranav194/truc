import {
  ADD_CUSTOMER,
  FETCH_CUSTOMERS,
  EDIT_CUSTOMER,
  DELETE_CUSTOMER,
} from "./types";
import * as CustomerApi from "../Api/CustomerApi";

export const fetchCustomerAction = () => (dispatch) => {
  CustomerApi.fetchCustomers().then((data) => {
    console.log(data);
    return dispatch({ type: FETCH_CUSTOMERS, payload: data });
  });
};

export const addCustomerAction = (data) => (dispatch) => {
  console.log(data);
  dispatch({ type: ADD_CUSTOMER, payload: data });
};
export const deleteCustomerAction = (data) => (dispatch) => {
  dispatch({ type: DELETE_CUSTOMER, payload: data });
};

export const editCustomerAction = (data) => (dispatch) => {
  console.log(data);
  dispatch({ type: EDIT_CUSTOMER, payload: data });
};
