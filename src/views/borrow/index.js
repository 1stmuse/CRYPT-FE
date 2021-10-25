import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Alert from "../../utils/Alert";
import welcome from "../../assets/welcome.svg";
import colors from "../../utils/colors";
import LoanCash from "./LoanCash";

const Borrow = () => {
  const [isMobile] = useMediaQuery(["(max-width: 800px)"]);
  const [adminInfo, setAdminInfo] = useState({
    bank_name: "",
    bank_number: "",
    btc_address: "",
    ethereum_address: "",
    litecoin_address: "",
    dogecoin_address: "",
  });

  const token = localStorage.getItem("token");
  const [socket, setSocket] = useState(null);

  const socketInit = () => {
    const newSock = io("https://cryptwavi.herokuapp.com", {
      query: {
        id: token,
      },
    });

    newSock.on("connected", (message) => {
      console.log(message);
      Alert("success", message);
    });

    newSock.on("loan-success", (message) => {
      console.log(message);
      Alert("success", message);
    });

    newSock.on("loan-accept-success", (message) => {
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
    fetch("https://cryptwavi.herokuapp.com/api/admin/info", {
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
    socketInit();
    getAdminInfo();
  }, []);

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
          Need cash for a while ? CRYPTWAVI got you covered, just tell us the
          amount and deposit BTC as your collateral, fast, easy and reliable
          always
        </Text>
      </Box>
      <Box bg="white" borderRadius="15px" py="5" mt="5" px="5">
        <LoanCash socket={socket} adminInfo={adminInfo} />
      </Box>
    </Box>
  );
};

export default Borrow;
