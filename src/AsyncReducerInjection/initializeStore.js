import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./index";

const initializeStore = () => {
  const store = createStore(
    // See rootReducer.createReducer for more info on this. Calling it without
    // a param creates a reducer with whatever is in rootReducer.
    rootReducer(),

    compose(
      applyMiddleware(thunk),

      // NOTE: Don't put this in a prod build, just doing this for the demo.
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  // Create an object for any later reducers
  store.asyncReducers = {};

  //Creates a convenient method for adding reducers later
  //See withReducer.js for this in use.
  store.injectReducer = (key, reducer) => {
    // Updates the aysncReducers object. This ensures we don't remove any old
    // reducers when adding new ones.
    store.asyncReducers[key] = reducer;
    // This is the key part: replaceReducer updates the reducer
    // See rootReducer.createReducer for more details, but it returns a function.
    store.replaceReducer(rootReducer(store.asyncReducers));
    return store;
  };

  return store;
};
export default initializeStore;
