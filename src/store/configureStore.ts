import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../redusers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { someMiddleware } from "../actions/requests";

const middleware = [someMiddleware];
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
