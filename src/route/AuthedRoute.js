import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthedRoute = ({ component: Comp, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth === true ? <Comp {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default AuthedRoute;
