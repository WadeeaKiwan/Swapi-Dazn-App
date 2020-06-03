import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import actorReducer from "./reducers/actorReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  actor: actorReducer
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
