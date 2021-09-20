import React from "react";
import { Box } from "@chakra-ui/react";
import SideNav from "../sidenav";
import Header from "../header";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../../views/Dashboard";
import Transaction from "../../views/Transaction";

const Layout = () => {
  return (
    <Box d="flex">
      <Box minH="100vh" w="15%" borderRight="1px solid grey">
        <SideNav />
      </Box>
      <Box h="100%" w="100%">
        <Box>
          <Header />
        </Box>
        <Box>
          <Switch>
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/transaction" exact component={Transaction} />
          </Switch>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
