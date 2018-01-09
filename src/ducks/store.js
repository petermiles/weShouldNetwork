import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";

import profileReducer from "./user/reducer";

export default createStore(profileReducer, composeWithDevTools(applyMiddleware(promiseMiddleware())));
