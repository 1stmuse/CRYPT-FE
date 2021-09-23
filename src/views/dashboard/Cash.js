import { Box, Text, Select } from "@chakra-ui/react";
import React from "react";
import LoanCash from "./LoanCash";
import RepayCash from "./RepayCash";

const Cash = () => {
  const [type, setType] = React.useState("borrow");
  return (
    <Box w="100%" mt="5" px="5">
      <Box w="70%">
        <Select
          placeholder="Select transaction type"
          onChange={(val) => setType(val.currentTarget.value)}
          defaultValue="borrow"
        >
          <option value="borrow">Borrow Cash</option>
          <option value="repay">Repay Loan</option>
        </Select>
      </Box>
      {type === "borrow" ? <LoanCash /> : <RepayCash />}
    </Box>
  );
};

export default Cash;
