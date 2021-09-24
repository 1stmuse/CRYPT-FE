import { Box, Text, Select } from "@chakra-ui/react";
import React from "react";
import LoanCash from "./LoanCash";
import RepayCash from "./RepayCash";

const Cash = () => {
  const [type, setType] = React.useState("borrow");
  return (
    <Box w="100%" mt="5" px="5">
      <LoanCash />
    </Box>
  );
};

export default Cash;
