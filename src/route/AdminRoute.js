import React from "react";
import { Redirect, Route } from "react-router-dom";

const AdminRoute = ({ component: Comp, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("isAdmin") ? (
          <Comp {...props} />
        ) : (
          <Redirect to="/dashboard" />
        )
      }
    />
  );
};

export default AdminRoute;
