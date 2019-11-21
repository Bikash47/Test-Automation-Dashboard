import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from "./components/Dashboard";

class RouterComponent extends Component {
  render() {
    debugger;
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" component={Dashboard} />
            <Route
              render={() => (
                <div>
                  {" "}
                  <h1>Page not found</h1>
                </div>
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default RouterComponent;
