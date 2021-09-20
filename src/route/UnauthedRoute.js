import React from "react";
import { Route, Redirect } from "react-router-dom";

const UnauthedRoute = ({ component: Comp, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(prop) =>
        isAuth === false ? <Comp {...prop} /> : <Redirect to="/dashboard" />
      }
    />
  );
};

export default UnauthedRoute;
