import React from "react";
import { Box } from "@chakra-ui/react";
import SideNav from "../sidenav";
import Header from "../header";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../../views/dashboard";
import Transaction from "../../views/Transaction";

const Layout = () => {
  return (
    <Box pos="fixed" left="0" right="0" bottom="0" top="0" overflowY="auto">
      {/* <SideNav /> */}
      <Box pos="fixed" left="0" right="0" top="0" zIndex="banner" bg="white">
        <Header />
      </Box>
      <Box h="100%" w="100%" d="flex" mt="75px">
        {/* <Header /> */}
        <SideNav />

        <Box py="10" width="100%">
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
