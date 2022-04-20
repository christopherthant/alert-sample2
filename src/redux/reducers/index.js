import { combineReducers } from "redux";

import alertListReducer from "./alertList.reducer";

// combineReducers for the redux store
const reducers = combineReducers({
  alertList: alertListReducer,
});

export default reducers;
