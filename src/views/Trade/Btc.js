import { Box, Select } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import BuyBtc from "./BuyBtc";
import SellBtc from "./SellBtc";
import io from "socket.io-client";
import { useSelector } from "react-redux";

const Btc = () => {
  const [type, setType] = React.useState("buy");

  return (
    <Box w="100%" mt="5" px="5">
      <Box w="150px">
        <Select
          onChange={(val) => setType(val.currentTarget.value)}
          defaultValue="buy"
        >
          <option value="buy">Buy BTC</option>
          <option value="sell">Sell BTC</option>
        </Select>
      </Box>
      {type === "buy" ? <BuyBtc /> : <SellBtc />}
    </Box>
  );
};

export default Btc;
