import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { requestsMiddleware } from "../middlewares/requests";

const middleware = [requestsMiddleware];
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
