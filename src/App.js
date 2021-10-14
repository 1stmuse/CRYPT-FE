import React from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import Home from "./views/home";
import UnauthedRoute from "./route/UnauthedRoute";
import AuthedRoute from "./route/AuthedRoute";
import Login from "./views/Login";
import Register from "./views/Register";
import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import AdminDash from "./views/admin";
import Application from "./route/Application";
import AdminRoute from "./route/AdminRoute";

function App() {
  const { isAdmin } = useSelector((state) => state.user);
  const history = useHistory();

  const admin = React.useMemo(() => {
    if (!isAdmin) return false;
    return true;
  }, [isAdmin]);

  return (
    <BrowserRouter>
      <Switch>
        <UnauthedRoute path="/" exact component={Home} />
        <UnauthedRoute path="/login" exact component={Login} />
        <UnauthedRoute
          path="/signup"
          exact
          // isAuth={isAuth}
          component={Register}
        />
        <AdminRoute path="/admin" exact component={AdminDash} />
        <AuthedRoute component={Application} />
        <Route
          path={"*"}
          exact
          component={() => (
            <Box>
              <Text>not fount</Text>
            </Box>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
