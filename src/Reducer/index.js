import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";
import { CustomerReducer } from "./CustomerReducer";

const reducer = combineReducers({
  loggedIn: AuthReducer,
  customers: CustomerReducer,
});

export default reducer;
