import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router-dom";
import "./styles.css";
import colors from "../../../utils/colors";

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
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const headerTextColor = {
    color: "white",
    fontWeight: "bold",
    fontSize: "22px",
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box className={scrollPosition > 2 ? "header" : "headerDefault"} px={20}>
      <Text fontStyle="italic" fontWeight="bold" color="white" fontSize={22}>
        CRYPTBLIS
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
