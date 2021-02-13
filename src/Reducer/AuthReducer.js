import { LOGIN_SUCCESS, LOGOUT } from "../Action/types";
import initialState from "../InitialState";

export const AuthReducer = (state = initialState.loggedIn, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return action.payload;
    case LOGOUT:
      localStorage.removeItem("token");
      return null;
    default:
      return state;
  }
};
