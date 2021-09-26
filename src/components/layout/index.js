import React from "react";
import { Box } from "@chakra-ui/react";
import SideNav from "../sidenav";
import Header from "../header";

import colors from "../../utils/colors";

const Layout = ({ children }) => {
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
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
