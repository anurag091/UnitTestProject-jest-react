import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import RootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

export const middleware = [ReduxThunk];

const composeWithMiddleware = composeWithDevTools(
  applyMiddleware(...middleware)
);

export const store = createStore(RootReducer, composeWithMiddleware);
