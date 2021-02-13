import {
  ADD_CUSTOMER,
  FETCH_CUSTOMERS,
  EDIT_CUSTOMER,
  DELETE_CUSTOMER,
} from "./types";
import * as CustomerApi from "../Api/CustomerApi";
export const fetchCustomerAction = (data) => (dispatch) => {
  CustomerApi.fetchCustomers().then((data) =>
    dispatch({ type: FETCH_CUSTOMERS, payload: data })
  );
};

export const addCustomerAction = (data) => (dispatch) => {
  dispatch({ type: ADD_CUSTOMER, payload: data });
};
export const deleteCustomerAction = (data) => (dispatch) => {
  dispatch({ type: DELETE_CUSTOMER, payload: data });
};

export const editCustomerAction = (data) => (dispatch) => {
  dispatch({ type: EDIT_CUSTOMER, payload: data });
};
