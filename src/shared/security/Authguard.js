import React from "react";
import { Route, Redirect, DelayedRedirect } from "react-router-dom";
let savedData = "";
let auth = false;
function Authguard({ component: Component, authed, ...rest }) {
  savedData = JSON.parse(localStorage.getItem("currentUser"));
  savedData == "false" || savedData == null ? (auth = false) : (auth = true);
  debugger;
  return (
    <Route
      // {...rest}
      render={props => (auth ? <Component {...props} /> : <ValidateRoute />)}
      // component={props => (auth ? component : <ValidateRoute />)}
    />
  );
}

class ValidateRoute extends React.Component {
  render() {
    debugger;
    alert("You are not Authorized to access this Page, Please Login");
    return (
      <Redirect to={{ pathname: "/", state: { from: this.props.location } }} />
    );
  }
}

export default Authguard;
