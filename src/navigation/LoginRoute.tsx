import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";


function LoginRoute({ children, path, ...rest }: RouteProps) {

  return (
    <Route path={path} {...rest}>
      {localStorage.getItem("SESSION_TOKEN") && (
        <Redirect
          to={{ pathname: "/home"  }}
        />
      )}
      {!localStorage.getItem("SESSION_TOKEN") &&
        children}
    </Route>
  );
}

export default LoginRoute;
