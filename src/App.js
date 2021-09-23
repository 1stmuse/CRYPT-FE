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
// import { userReducer } from "./redux/reducer";

function App() {
  const token = useSelector((state) => state.user.token);

  const isAuth = () => {
    if (token === null || token === undefined) {
      return false;
    }
    return true;
  };

  return (
    <BrowserRouter>
      <Switch>
        <UnauthedRoute path="/" exact isAuth={isAuth()} component={Home} />
        <UnauthedRoute
          path="/login"
          exact
          isAuth={isAuth()}
          component={Login}
        />
        <UnauthedRoute
          path="/signup"
          exact
          isAuth={isAuth()}
          component={Register}
        />
        <AuthedRoute isAuth={isAuth()} component={Layout} />
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
