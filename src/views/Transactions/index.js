import { Box, Divider, Select, Text } from "@chakra-ui/react";
import React from "react";
import StatCard from "../../components/statCards";
import colors from "../../utils/colors";

const Transactions = () => {
  return (
    <Box mt="10">
      <Text fontSize="2xl" color={colors.deepBlue}>
        Statistics
      </Text>
      <Box d="flex" alignItems="center">
        <StatCard text="Total Transactions" amount="28,345" />
        <StatCard text="Succesfull Transactions" amount="120" color="#f35162" />
        <StatCard text="Failed Transactions" amount="0" />
      </Box>
      <Box mt="10" bg="white" minH="400px" pt="5" borderRadius="15px" w="80%">
        <Box
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          px="10"
        >
          <Text>Transactions</Text>
          <Box>
            <Select defaultValue="all">
              <option value="all">All</option>
              <option value="succesfull">Succesfull</option>
              <option value="failed">Failed</option>
            </Select>
          </Box>
        </Box>
        <Divider mt="4" />
      </Box>
    </Box>
  );
};

export default Transactions;
