import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router-dom";
import "./styles.css";

const useStyles = createUseStyles({
  nav: {
    padding: "5px 15px",
    borderRadius: "10px",
    cursor: "pointer",
  },
});

const UnauthHeader = () => {
  const classes = useStyles();
  const history = useHistory();
  const [isMobile] = useMediaQuery(["(max-width: 890px)"]);
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const headerTextColor = {
    color: "white",
    fontWeight: "bold",
    fontSize: isMobile ? "11px" : "22px",
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box className={scrollPosition > 2 ? "header" : "headerDefault"} px={20}>
      <Text
        fontStyle="italic"
        fontWeight="bold"
        color="white"
        fontSize={isMobile ? 11 : 22}
      >
        CRYPTWAVILOAN
      </Text>
      <Box
        d="flex"
        justifyContent="space-between"
        // border="1px solid red"
        minW="50%"
        maxW="60%"
      >
        <Box className={classes.nav}>
          <Text style={headerTextColor}>Contact</Text>
        </Box>
        <Box className={classes.nav}>
          <Text style={headerTextColor}>Services</Text>
        </Box>
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
