import { Box, Text, useMediaQuery, Link, Image } from "@chakra-ui/react";
import React from "react";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router-dom";
import logo from "../../../assets/crylogo.png";
import "./styles.css";

const useStyles = createUseStyles({
  nav: {
    padding: "5px 15px",
    borderRadius: "10px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const UnauthHeader = () => {
  const classes = useStyles();
  const history = useHistory();
  const [isMobile] = useMediaQuery(["(max-width: 800px)"]);

  const headerTextColor = {
    color: "white",
    fontWeight: "bold",
    fontSize: isMobile ? "11px" : "18px",
  };

  return (
    <Box className="headAuth" px={5} overflow="hidden">
      <Box
        d="flex"
        alignItems="center"
        cursor="pointer"
        onClick={() => history.push("/")}
      >
        <Image src={logo} w="70px" h="40%" />
        <Text
          fontStyle="italic"
          // fontWeight="bold"
          fontFamily="Baskervville, serif"
          color="white"
          fontSize={isMobile ? 15 : 22}
        >
          CRYPTWAVI
        </Text>
      </Box>
      <Box
        d="flex"
        justifyContent="space-between"
        // border="1px solid red"
        // minW="30%"
        // maxW="60%"
      >
        <Box
          className={classes.nav}
          onClick={() => history.push("login")}
          bg="blueviolet"
        >
          <Text style={headerTextColor}>Login</Text>
        </Box>
        <Box className={classes.nav} onClick={() => history.push("signup")}>
          <Text style={headerTextColor}>Sign Up</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default UnauthHeader;
