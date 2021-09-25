import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./views/home";
import UnauthedRoute from "./route/UnauthedRoute";
import AuthedRoute from "./route/AuthedRoute";
import Login from "./views/Login";
import Register from "./views/Register";
import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import AdminDash from "./views/admin";
// import { userReducer } from "./redux/reducer";

function App() {
  const { token, isAdmin } = useSelector((state) => state.user);

  const isAuth = React.useMemo(() => {
    if (token === null || token === undefined) {
      return false;
    }
    return true;
  }, [token]);

  return (
    <BrowserRouter>
      <Switch>
        <UnauthedRoute path="/" exact isAuth={isAuth} component={Home} />
        <UnauthedRoute path="/login" exact isAuth={isAuth} component={Login} />
        <UnauthedRoute
          path="/signup"
          exact
          isAuth={isAuth}
          component={Register}
        />
        {isAdmin && <Route path="/admin" exact component={AdminDash} />}
        <AuthedRoute isAuth={isAuth} component={Layout} />
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
