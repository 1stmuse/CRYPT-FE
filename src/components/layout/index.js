import React from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import SideNav from "../sidenav";
import Header from "../header";
import colors from "../../utils/colors";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const { open } = useSelector((state) => state.nav);
  const [isMobile] = useMediaQuery(["(max-width: 1050px)"]);
  return (
    <Box
      bg={"#000"}
      pos="fixed"
      left="0"
      right="0"
      top="0"
      minH="100%"
      bottom="0"
      overflow="scroll"
    >
      <SideNav show={open} />
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
      <Box h="100%" w={isMobile ? "90%" : "80%"} pt="70px" mx="auto">
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
