import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
// Conditional routes , the user have to be login
function PrivateRoute({ children, path, ...rest }: RouteProps) {
  return (
    <Route path={path} {...rest}>
      {localStorage.getItem("SESSION_TOKEN") && children}
      {!localStorage.getItem("SESSION_TOKEN") && (
        <Redirect to={{ pathname: "/login" }} />
      )}
    </Route>
  );
}

export default PrivateRoute;
