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
import colors from "../../utils/colors";

const Header = () => {
  return (
    <Box
      d="flex"
      justifyContent="space-between"
      alignItems="center"
      // border="1px solid green"
      height="80px"
      boxShadow="0px 3px 0px 0px rgb(235 237 238)"
      // pos="absolute"
      // left="0"
      // right="0"
      // top="0"
    >
      <Box pl="5">
        <Text
          fontStyle="italic"
          fontWeight="bold"
          fontSize={22}
          color={colors.deepBlue}
        >
          CRYPTBLIS
        </Text>
      </Box>
      <Box pr="28" d="flex" justifyContent="space-between" alignItems="center">
        <Text>main</Text>
      </Box>
    </Box>
  );
};

export default Header;
