import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import welcome from "../../assets/welcome.svg";
import colors from "../../utils/colors";
import Btc from "./Btc";

const Trade = () => {
  const [isMobile] = useMediaQuery(["(max-width: 800px)"]);
  return (
    <Box mt="10">
      <Box
        w={isMobile ? "100%" : "60%"}
        h="150px"
        bgImg={welcome}
        pt="10"
        borderRadius="15px"
        px="5"
      >
        <Text
          // ml="10"
          textAlign="left"
          w={isMobile ? "100%" : "70%"}
          color={colors.white}
        >
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
