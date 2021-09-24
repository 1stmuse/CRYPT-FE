import { Box, Text } from "@chakra-ui/react";
import React from "react";
import welcome from "../../assets/welcome.svg";
import colors from "../../utils/colors";
import Btc from "./Btc";

const Trade = () => {
  return (
    <Box mt="10">
      <Box w="60%" h="150px" bgImg={welcome} pt="10" borderRadius="15px">
        <Text ml="10" textAlign="left" w="70%" color={colors.white}>
          Here at CRYTBLIS your transactions are Fast, Secured and Reliable,
          Sell or Buy BTC to and from CRYTBLIS with ease and just about 3 steps,
          get started now
        </Text>
      </Box>
      <Box bg="white" borderRadius="15px" py="5" mt="5">
        <Btc />
      </Box>
    </Box>
  );
};

export default Trade;
