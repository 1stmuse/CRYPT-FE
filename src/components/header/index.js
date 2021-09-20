import React from "react";
import {
  Box,
  Text,
  Input,
  InputGroup,
  InputLeftAddon,
  Icon,
  Image,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <Box d="flex" justifyContent="space-between">
      <Box></Box>
      <Box
        d="flex"
        w="30%"
        justifyContent="space-between"
        alignItems="center"
      ></Box>
    </Box>
  );
};

export default Header;
