import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import welcome from "../../assets/welcome.svg";
import colors from "../../utils/colors";
import RepayCash from "../borrow/RepayCash";

const Repay = () => {
  const [isMobile, smMobile] = useMediaQuery([
    "(max-width: 800px)",
    "(max-width: 400px)",
  ]);
  return (
    <Box mt="10">
      <Box
        w={isMobile ? "100%" : "60%"}
        h="150px"
        bgImg={welcome}
        pt="5"
        borderRadius="15px"
        px="5"
      >
        <Text mb="5" fontSize="2xl" color={colors.white}>
          LOAN REPAYMENT
        </Text>
        <Text
          // ml="10"
          fontSize="13px"
          textAlign="left"
          w={isMobile ? "100%" : "70%"}
          color={colors.white}
        >
          Repay your existing loans to enable you qualify for another loan,
          CRYPTWAVILOAN is all about making our customers happy all the time.
        </Text>
      </Box>
      <Box
        bg="white"
        borderRadius="15px"
        py="5"
        mt="5"
        px={smMobile ? "0" : isMobile ? "2" : "5"}
      >
        <RepayCash />
      </Box>
    </Box>
  );
};

export default Repay;
