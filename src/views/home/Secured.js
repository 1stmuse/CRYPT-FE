import React from "react";
import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import colors from "../../utils/colors";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  gridItem: {
    width: "250px",
    height: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  girdItemText: {
    textAlign: "center",
    color: colors.deepBlue,
  },
  count: {
    color: colors.deepBlue,
    fontSize: "50px",
  },
});

const Secured = () => {
  const classes = useStyles();
  const [isMobile] = useMediaQuery(["(max-width:800px)"]);
  return (
    <Box className={classes.main} h="100vh">
      <Text fontSize={isMobile ? "3xl" : "5xl"} color={colors.deepBlue}>
        100% secure transactions
      </Text>
      <Box w={isMobile ? "80%" : "50%"} my="5">
        <Text textAlign="center" color="white" fontSize="1xl">
          We buy Bitcoins at the very best market prices because we wanna make
          you(our customer) rich. We got Velocity in our DNA. You will testify
          on 1st trial or walk away! More than 10k+ Transactions
        </Text>
      </Box>
      <Box d="flex" flexWrap="wrap" px={5} justifyContent="space-around">
        <Box className={classes.gridItem}>
          {/* <Laptop height="50px" /> */}
          <Text className={classes.count}>15K+</Text>
          <Box>
            <Text className={classes.girdItemText}>Clients</Text>
          </Box>
        </Box>

        <Box className={classes.gridItem}>
          {/* <Time height="50px" /> */}
          <Text className={classes.count}>2.6K+</Text>
          <Box>
            <Text className={classes.girdItemText}>
              Digital currency exchanged
            </Text>
          </Box>
        </Box>

        <Box className={classes.gridItem}>
          {/* <Column height="50px" /> */}
          <Text className={classes.count}>44.2k</Text>
          <Box>
            <Text className={classes.girdItemText}>Transactions</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Secured;
