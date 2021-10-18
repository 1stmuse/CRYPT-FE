import { Box, Text, Link, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import colors from "../../utils/colors";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: {
    display: "flex",
    // backgroundColor: "#222425",
    width: "100%",
    backgroundColor: "white",
    // padding: "15px 55px",
  },
});

const Footer = () => {
  const classes = useStyles();
  const [isTab, isMobile] = useMediaQuery([
    "(max-width: 1000px)",
    "(max-width:800px)",
  ]);
  return (
    <Box
      className={classes.main}
      py="15px"
      px={isMobile ? "10px" : "55px"}
      minH="40vh"
      borderTop={`1px solid ${colors.brown}`}
    >
      <Box width="100%">
        <Box>
          <Box d="flex" alignItems="center">
            <Text
              fontSize={isMobile ? "2xl" : "5xl"}
              mr={10}
              color={colors.deepBlue}
            >
              CRYPTWAVILOAN
            </Text>
            <Box
              d="flex"
              color={colors.deepBlue}
              width="200px"
              justifyContent="space-around"
            >
              <Text className="fa fa-twitter fa-2x" aria-hidden="true" />
              <Text className="fa fa-facebook fa-2x" aria-hidden="true" />
              <Text className="fa fa-instagram fa-2x" aria-hidden="true" />
            </Box>
          </Box>
          <Box mt={isMobile && "5"}>
            <Text textAlign="left" color={colors.deepBlue}>
              Made with ❤ in Nigeria © 2021 Cryptwaviloan, ApS. All rights
              reserved.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
