import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import getProductReducer
 from "./reducers/productReducer"

const reducer = combineReducers({
  // Add reducers here
  getProducts: getProductReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);


export default store;