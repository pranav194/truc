import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import initialState from "../InitialState";
import reducer from "../Reducer";

const middleware = [thunk];

const store = createStore(reducer, initialState);

export default store;
