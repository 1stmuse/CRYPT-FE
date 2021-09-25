import React from "react";
import { Box } from "@chakra-ui/react";
import SideNav from "../sidenav";
import Header from "../header";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../../views/dashboard";
import Transaction from "../../views/Transaction";
import Trade from "../../views/Trade";
import colors from "../../utils/colors";
import Borrow from "../../views/borrow";

const Layout = () => {
  return (
    <Box
      bg={colors.ash}
      pos="fixed"
      left="0"
      right="0"
      top="0"
      minH="100%"
      bottom="0"
      overflow="scroll"
    >
      {/* <SideNav /> */}
      {/* <Box
        pos="fixed"
        left="0"
        right="0"
        top="0"
        height="70px"
        zIndex="banner"
        bg="white"
        border="1px solid red"
      > */}
      <Header />
      {/* </Box> */}
      <Box h="100%" w="80%" pt="70px" mx="auto">
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/transaction" exact component={Transaction} />
          <Route path="/trade" exact component={Trade} />
          <Route path="/borrow" exact component={Borrow} />
        </Switch>
      </Box>
    </Box>
  );
};

export default Layout;
