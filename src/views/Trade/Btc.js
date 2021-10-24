import { Box, Select } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import BuyBtc from "./BuyBtc";
import SellBtc from "./SellBtc";
import io from "socket.io-client";
import Alert from "../../utils/Alert";

const Btc = () => {
  const [type, setType] = React.useState("buy");
  // const { token } = useSelector((state) => state.user);
  const token = localStorage.getItem("token");
  const [socket, setSocket] = useState(null);
  const [adminInfo, setAdminInfo] = useState({
    bank_name: "",
    bank_number: "",
    btc_address: "",
    ethereum_address: "",
    litecoin_address: "",
    dogecoin_address: "",
  });

  const socketInit = () => {
    const newSock = io("http://localhost:8000", {
      query: {
        id: token,
      },
    });

    newSock.on("connected", (message) => {
      console.log(message);
      Alert("success", message);
    });

    newSock.on("buy-success", (message) => {
      console.log(message);
      Alert("success", message);
    });

    newSock.on("sell-success", (message) => {
      console.log(message);
      Alert("success", message);
    });

    newSock.on("disconnection", () => {
      setSocket(null);
      Alert("error", "socket disconnected");
    });

    setSocket(newSock);
  };

  const getAdminInfo = () => {
    fetch("api/admin/info", {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAdminInfo(data.data.info))
      .catch((err) => Alert("error", "a problem occured"));
  };

  useEffect(() => {
    // console.log("leaked");
    getAdminInfo();
    socketInit();
  }, []);

  return (
    <Box w="100%" mt="5" px="5">
      <Box w="150px">
        <Select
          onChange={(val) => setType(val.currentTarget.value)}
          defaultValue="buy"
        >
          <option value="buy">Buy Crypto</option>
          <option value="sell">Sell Crypto</option>
        </Select>
      </Box>
      {type === "buy" ? (
        <BuyBtc socket={socket} adminInfo={adminInfo} />
      ) : (
        <SellBtc socket={socket} adminInfo={adminInfo} />
      )}
    </Box>
  );
};

export default Btc;
