import { rootReducer } from "../redux-store/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { applyMiddleware, createStore, compose } from "redux";

// const store = createStore(rootReducer);
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
