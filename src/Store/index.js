import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import initialState from "../InitialState";
import reducer from "../Reducer";

let composeMethod = compose;

const middlewares = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeMethod(applyMiddleware(...middlewares))
);

export default store;
