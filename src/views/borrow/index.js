import { Box, Text } from "@chakra-ui/react";
import React from "react";
import welcome from "../../assets/welcome.svg";
import colors from "../../utils/colors";
import Cash from "./Cash";
import LoanCash from "./LoanCash";

const Borrow = () => {
  return (
    <Box mt="10">
      <Box w="60%" h="150px" bgImg={welcome} pt="10" borderRadius="15px">
        <Text ml="10" textAlign="left" w="70%" color={colors.white}>
          Need cash for a while ? CRYPTBLIS got you covered, just tell us the
          amount and deposit BTC as your collateral, fast, easy and reliable
          always
        </Text>
      </Box>
      <Box bg="white" maxW="70%" borderRadius="15px" py="5" mt="5" px="5">
        <LoanCash />
      </Box>
    </Box>
  );
};

export default Borrow;
