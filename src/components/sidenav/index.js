import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import colors from "../../utils/colors";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const useStyles = createUseStyles({
  nav: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    cursor: "pointer",
  },
});

const SideNav = ({ show = false }) => {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  const navClick = (route) => {
    dispatch({ type: "TOGGLE_NAV" });
    history.push(route);
  };

  return (
    <Box
      w="300px"
      d="flex"
      flexDir="column"
      alignItems="center"
      pos="fixed"
      left={show ? "0" : "-310px"}
      top="0"
      bottom="0"
      background={colors.deepBlue}
      // minH="100vh"
      borderRadius="10px"
      zIndex="banner"
      transition=".4s"
    >
      <Box>
        <Text
          py="3.5"
          color="red"
          onClick={() => dispatch({ type: "TOGGLE_NAV" })}
        >
          Close
        </Text>
        <Box
          mt="20"
          className={classes.nav}
          onClick={() => navClick("dashboard")}
        >
          <Text
            color={colors.white}
            className="fa fa-desktop"
            aria-hidden="true"
          />
          <Text color={colors.white}>Dashboard</Text>
        </Box>
        <Box
          className={classes.nav}
          mt="5"
          onClick={() => navClick("transactions")}
        >
          <Text
            color={colors.white}
            className="fa fa-money"
            aria-hidden="true"
          />
          <Text color={colors.white}>Transactions</Text>
        </Box>
        <Box className={classes.nav} mt="5" onClick={() => navClick("trade")}>
          <Text
            color={colors.white}
            className="fa fa-money"
            aria-hidden="true"
          />
          <Text color={colors.white}>Trade</Text>
        </Box>
        <Box className={classes.nav} mt="5" onClick={() => navClick("borrow")}>
          <Text
            color={colors.white}
            className="fa fa-university"
            aria-hidden="true"
          />
          <Text color={colors.white}>Borrow</Text>
        </Box>
      </Box>
      <Text
        mt="auto"
        mb="20px"
        color="white"
        cursor="pointer"
        onClick={() => {
          localStorage.setItem("token", "");
          localStorage.setItem("id", "");
          localStorage.setItem("isAdmin", "");
          window.location.reload();
        }}
      >
        LOGOUT
      </Text>
    </Box>
  );
};

export default SideNav;
