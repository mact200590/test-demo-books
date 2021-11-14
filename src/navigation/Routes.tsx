import React, { lazy, Suspense } from "react";
import { Switch } from "react-router-dom";
import { LoadingWrapper } from "../component";
import { CreateBookMarkPage } from "../page/CreateBookMarkPage";

import LoginRoute from "./LoginRoute";
import PrivateRoute from "./PrivateRoute";
import RoutesName from "./routesUtils";

const LoginPage = lazy(() => import("../page/LoginPage"));
const Homepage = lazy(() => import("../page/Homepage"));
// This is the file for routes
const Routes = () => (
  <Suspense
    fallback={
      <LoadingWrapper loading>
        <></>
      </LoadingWrapper>
    }
  >
    <Switch>
      <LoginRoute exact path={RoutesName["/login"]}>
        <LoginPage />
      </LoginRoute>

      <PrivateRoute exact path={RoutesName["/"]}>
        <Homepage />
      </PrivateRoute>
      <PrivateRoute exact path={RoutesName["/home"]}>
        <Homepage />
      </PrivateRoute>
      <PrivateRoute
        exact
        path={[
          RoutesName["/book-mark/new"],
          `${RoutesName["/book-mark/edit"]}/:id`,
        ]}
      >
        <CreateBookMarkPage />
      </PrivateRoute>
    </Switch>
  </Suspense>
);

export default Routes;
