import { combineReducers } from "redux";

import DashboardReducers from '../reducers/DashboardReducers';
/**
 * @param {Object} - key/value of reducer functions
 */
const createReducer = asyncReducers =>
  combineReducers({
    dashboard: DashboardReducers,
    // When reducers are provided to createReducer they'll be plopped on here
    ...asyncReducers
  });

export default createReducer;
