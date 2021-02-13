import {
  FETCH_CUSTOMERS,
  ADD_CUSTOMER,
  EDIT_CUSTOMER,
  DELETE_CUSTOMER,
} from "../Action/types";
import initialState from "../InitialState";

export const CustomerReducer = (state = initialState.customers, action) => {
  switch (action.type) {
    case FETCH_CUSTOMERS:
      return action.payload;
    case DELETE_CUSTOMER:
      return state.filter((customer) => customer.id !== action.payload);
    case EDIT_CUSTOMER:
      return state.map((customer) =>
        customer.id === action.payload.id ? action.payload.customer : customer
      );
    case ADD_CUSTOMER:
      return [...state, action.payload];
    default:
      return state;
  }
};
