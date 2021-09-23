import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import colors from "../../utils/colors";
import { useHistory } from "react-router-dom";

const useStyles = createUseStyles({
  nav: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    cursor: "pointer",
  },
});

const SideNav = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <Box
      w="200px"
      d="flex"
      flexDir="column"
      alignItems="center"
      pos="relative"
      background={colors.primary}
      // minH="100vh"
      my="10"
      ml="5"
      borderRadius="10px"
    >
      <Box mt="20">
        <Box className={classes.nav} onClick={() => history.push("dashboard")}>
          <Text
            color={colors.white}
            className="fa fa-desktop"
            aria-hidden="true"
          />
          <Text color={colors.white}>Dashboard</Text>
        </Box>
        <Box
          mt="5"
          className={classes.nav}
          onClick={() => history.push("profile")}
        >
          <Text
            color={colors.white}
            className="fa fa-user"
            aria-hidden="true"
          />
          <Text color={colors.white}>Profile</Text>
        </Box>
        <Box
          className={classes.nav}
          mt="5"
          onClick={() => history.push("transaction")}
        >
          <Text
            color={colors.white}
            className="fa fa-money"
            aria-hidden="true"
          />
          <Text color={colors.white}>Transactions</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SideNav;
