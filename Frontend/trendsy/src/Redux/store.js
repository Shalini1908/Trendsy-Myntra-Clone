import { applyMiddleware, compose, legacy_createStore } from "redux";
import { ProductReducer } from "./reducer";
//   import thunk from "redux-thunk";

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  ProductReducer
  // composer(applyMiddleware(thunk))
);
