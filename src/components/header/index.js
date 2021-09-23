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
  const [active, setActive] = React.useState(0);
  const history = useHistory();

  const routeClick = (route, num) => {
    setActive(num);
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
          borderBottom={active === 0 ? `4px solid ${colors.primary}` : null}
          onClick={() => routeClick("dashboard", 0)}
        >
          Dashboard
        </Text>
        <Text
          className={classes.tab}
          borderBottom={active === 1 ? `4px solid ${colors.primary}` : null}
          onClick={() => routeClick("transaction", 1)}
        >
          Transaction
        </Text>
        <Text
          borderBottom={active === 2 ? `4px solid ${colors.primary}` : null}
          className={classes.tab}
          onClick={() => routeClick("trade", 2)}
        >
          Trade
        </Text>
        <Text
          borderBottom={active === 3 ? `4px solid ${colors.primary}` : null}
          className={classes.tab}
          onClick={() => routeClick("borrow", 3)}
        >
          Borrow
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
