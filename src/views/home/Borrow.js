import { Box, Text, Image, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import lend from "../../assets/hand.gif";
import { useHistory } from "react-router-dom";
import { createUseStyles } from "react-jss";
import Button from "../../components/Button";
import colors from "../../utils/colors";

const useStyles = createUseStyles({
  box: {
    display: "flex",
    alignItems: "center",
    minWidth: "200px",
    // maxWidth: "200px",
    fontSize: "13px",
    marginRight: "5px",
    marginBottom: "10px",
  },
  circle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "20px",
    width: "20px",
    borderRadius: "100%",
    backgroundColor: "#c9d4f6",
    marginRight: "10px",
  },
});

const Borrow = () => {
  const classes = useStyles();
  const history = useHistory();
  const [isMobile] = useMediaQuery(["(max-width: 800px)"]);
  return (
    <Box
      h="auto"
      //   border="1px solid red"
      px={isMobile ? "5" : "10"}
      d="flex"
      flexDir={isMobile && "column"}
      alignItems="center"
      justifyContent="space-between"
      py="10"
    >
      <Box w={isMobile ? "100%" : "40%"}>
        <Image src={lend} height="100%" width="100%" />
      </Box>
      <Box w={isMobile ? "100%" : "50%"} px={isMobile ? "0" : "10"}>
        <Text mb="5" fontSize={isMobile ? "3xl" : "4xl"}>
          Why Are We The Right One To Borrow From!
        </Text>
        <Box>
          <Text mb="10">
            Here are few reasons why you should borrow from us at CRYPT WAVI
          </Text>
          <Box d="flex" flexDir={isMobile && "column"}>
            <Box>
              <Box className={classes.box}>
                <Box className={classes.circle}>
                  <Text className="fa fa-check" color={colors.white} />
                </Box>
                <Text>No origin fees</Text>
              </Box>
              <Box className={classes.box}>
                <Box className={classes.circle}>
                  <Text className="fa fa-check" color={colors.white} />
                </Box>
                <Text>Authomatic approval, no credit checks</Text>
              </Box>
            </Box>
            <Box>
              <Box className={classes.box}>
                <Box className={classes.circle}>
                  <Text className="fa fa-check" color={colors.white} />
                </Box>
                <Text>No monthly repayments</Text>
              </Box>
              <Box className={classes.box}>
                <Box className={classes.circle}>
                  <Text className="fa fa-check" color={colors.white} />
                </Box>
                <Text>Available from $30k to $3m</Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Button
            type="primary"
            // bg={colors.deepBlue}
            mt="55px"
            onClick={() => history.push("signup")}
          >
            START BORROWING
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Borrow;
