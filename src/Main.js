import React, { Component } from "react";
import { Provider } from "react-redux";
import Router from "./Router";
import initializeStore from "./AsyncReducerInjection/initializeStore";

class Main extends Component {
  render() {
    const store = initializeStore();

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    ); //
  }
}
export default Main;
