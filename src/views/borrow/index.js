import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Alert from "../../utils/Alert";
import welcome from "../../assets/welcome.svg";
import colors from "../../utils/colors";
import LoanCash from "./LoanCash";

const Borrow = () => {
  const [isMobile] = useMediaQuery(["(max-width: 800px)"]);

  const token = localStorage.getItem("token");
  const [socket, setSocket] = useState(null);

  const socketInit = () => {
    const newSock = io("https://cryptblis.herokuapp.com", {
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
  useEffect(() => {
    // console.log("leaked");
    socketInit();
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
          Need cash for a while ? CRYPTBLIS got you covered, just tell us the
          amount and deposit BTC as your collateral, fast, easy and reliable
          always
        </Text>
      </Box>
      <Box bg="white" borderRadius="15px" py="5" mt="5" px="5">
        <LoanCash socket={socket} />
      </Box>
    </Box>
  );
};

export default Borrow;
