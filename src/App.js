import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./views/home";
import UnauthedRoute from "./route/UnauthedRoute";
import AuthedRoute from "./route/AuthedRoute";
import Login from "./views/Login";
import Register from "./views/Register";

function App() {
  const token = localStorage.getItem("token");

  const isAuth = React.useMemo(() => {
    if (token === null || token === undefined) {
      return false;
    }
    return true;
  }, [token]);

  return (
    <BrowserRouter>
      <Switch>
        <UnauthedRoute path="/" exact isAuth={false} component={Home} />
        <UnauthedRoute path="/login" exact isAuth={isAuth} component={Login} />
        <UnauthedRoute
          path="/signup"
          exact
          isAuth={isAuth}
          component={Register}
        />
        <AuthedRoute isAuth={isAuth} component={Layout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
