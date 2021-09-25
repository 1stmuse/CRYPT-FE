import React from "react";
import { Box, Text } from "@chakra-ui/react";
import colors from "../../utils/colors";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router-dom";

const useStyles = createUseStyles({
  tab: {
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
    alignItems: "center",
    height: "100%",
    transition: "0.4s",
    // paddingBottom: "5px",
    // borderBottom: "1px solid yellow",
  },
});

const Header = () => {
  const classes = useStyles();
  const history = useHistory();

  const locate = (route) => {
    if (history.location.pathname.split("/").includes(route)) {
      return true;
    }
    return false;
  };

  const routeClick = (route) => {
    history.push(route);
  };
  return (
    <Box
      d="flex"
      // justifyContent="space-between"
      alignItems="center"
      // border="1px solid green"
      // height="80px"
      // boxShadow="0px 3px 0px 0px rgb(235 237 238)"
      pos="fixed"
      left="0"
      right="0"
      top="0"
      px="28"
      height="70px"
      zIndex="banner"
      bg="white"
      // border="1px solid red"
    >
      <Box pl="5">
        <Text
          fontStyle="italic"
          fontWeight="bold"
          fontSize={22}
          color={colors.deepBlue}
        >
          CRYPTBLIS
        </Text>
      </Box>
      <Box
        ml="28"
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        minW="30%"
        h="100%"
        // border="1px solid green"
      >
        <Text
          className={classes.tab}
          borderBottom={
            locate("dashboard") === true ? `4px solid ${colors.primary}` : null
          }
          onClick={() => routeClick("dashboard")}
        >
          Dashboard
        </Text>
        <Text
          className={classes.tab}
          borderBottom={
            locate("transaction") === true
              ? `4px solid ${colors.primary}`
              : null
          }
          onClick={() => routeClick("transaction")}
        >
          Transaction
        </Text>
        <Text
          borderBottom={
            locate("trade") === true ? `4px solid ${colors.primary}` : null
          }
          className={classes.tab}
          onClick={() => routeClick("trade")}
        >
          Trade
        </Text>
        <Text
          borderBottom={
            locate("borrow") === true ? `4px solid ${colors.primary}` : null
          }
          className={classes.tab}
          onClick={() => routeClick("borrow")}
        >
          Borrow
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
