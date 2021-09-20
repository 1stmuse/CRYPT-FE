import { Box } from "@chakra-ui/layout";
import React from "react";
import UnauthHeader from "../header/UnauthHeader";
import bg from "../../assets/bctBg.jpg";

const UnauthLayout = ({ children }) => {
  return (
    <Box bgImg={bg} minH="150vh">
      <Box
        position="absolute"
        left="0"
        right="0"
        top="0"
        height="100vh"
        bg="rgba(0,0,0, 0.6)"
      />
      <UnauthHeader />
      {children}
    </Box>
  );
};

export default UnauthLayout;
