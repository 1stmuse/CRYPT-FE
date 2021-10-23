import React from "react";
import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import colors from "../../utils/colors";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const useStyles = createUseStyles({
  tab: {
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
    alignItems: "center",
    height: "100%",
    transition: "0.4s",
  },
});

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const [isMobile] = useMediaQuery(["(max-width: 850px)"]);
  const dispatch = useDispatch();

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
      alignItems="center"
      pos="fixed"
      left="0"
      right="0"
      top="0"
      px={isMobile ? "10" : "28"}
      height="70px"
      bg="white"
      zIndex="100"
    >
      {isMobile ? (
        <Box
          d="flex"
          width="100vw"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text
            // border="1px solid red"
            p="2"
            fontSize="18px"
            className="fa fa-bars"
            color={colors.deepBlue}
            onClick={() => dispatch({ type: "TOGGLE_NAV" })}
          >
            {/* text */}
          </Text>
          <Box>
            <Text
              fontStyle="italic"
              fontWeight="bold"
              fontSize={18}
              color={colors.deepBlue}
            >
              CRYPTWAVILOAN
            </Text>
          </Box>
        </Box>
      ) : (
        <>
          <Box pl="5">
            <Text
              fontStyle="italic"
              fontWeight="bold"
              fontSize={22}
              color={colors.deepBlue}
            >
              CRYPTWAWILOAN
            </Text>
          </Box>
          <Box
            ml="20"
            d="flex"
            justifyContent="space-around"
            alignItems="center"
            minW="50%"
            h="100%"
            // border="1px solid green"
          >
            <Text
              className={classes.tab}
              borderBottom={
                locate("dashboard") === true
                  ? `4px solid ${colors.primary}`
                  : null
              }
              onClick={() => routeClick("dashboard")}
            >
              Dashboard
            </Text>
            <Text
              className={classes.tab}
              borderBottom={
                locate("transactions") === true
                  ? `4px solid ${colors.primary}`
                  : null
              }
              onClick={() => routeClick("transactions")}
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
          <Box ml="auto">
            <Text
              className={classes.tab}
              color={colors.deepBlue}
              onClick={() => {
                localStorage.setItem("token", "");
                localStorage.setItem("id", "");
                localStorage.setItem("isAdmin", "");
                window.location.reload();
              }}
            >
              Logout
            </Text>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Header;
