import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import colors from "../../utils/colors";
import { createUseStyles } from "react-jss";
import Bounce from "react-reveal/Bounce";

const useStyles = createUseStyles({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.ash,
  },
  gridItem: {
    maxWidth: "300px",
    minHeight: "250px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: `1px solid blueviolet`,
    padding: "10px 15px",
    marginBottom: "20px",
  },
  girdItemText: {
    textAlign: "center",
    color: colors.brown,
  },
  count: {
    color: colors.deepBlue,
    fontSize: "25px",
  },
});

const WeAre = () => {
  const classes = useStyles();
  const [isMobile] = useMediaQuery(["(max-width:800px)"]);
  return (
    <Box className={classes.main}>
      <Box w="80%" mt={isMobile && "5"}>
        <Text textAlign="center" fontSize={isMobile ? "3xl" : "5xl"}>
          Who we are?
        </Text>
        <Text mt={4} textAlign="center" color={colors.brown}>
          CRYPT WAVI provides a Bitcoin marketplace where people sell Bitcoin
          easily and safely with notable simple UI, friendly online customer
          support 24/7 and lowest fee compared with major players on the market.
          Our team is comprised mostly by banking professionals with extensive
          experience in financial products, E-currencies, Payment System and
          Agile Software Development, and others.
        </Text>
        <Box mt={5}>
          <Text textAlign="center" fontSize="2xl">
            Take on the market with our powerful platforms
          </Text>

          <Box
            d="flex"
            flexWrap="wrap"
            mb={5}
            justifyContent="space-around"
            mt={10}
          >
            <Bounce delay={100}>
              <Box className={classes.gridItem}>
                <Text color={colors.deepBlue} my={3}>
                  Secured
                </Text>
                <Box>
                  <Text className={classes.girdItemText}>
                    By having multiple brokerage accounts, you can take
                    advantage of the strengths of each broker, mixing and
                    matching the qualities that you find valuable. And that
                    should save you money and offer a better overall product and
                    experience.
                  </Text>
                </Box>
              </Box>
            </Bounce>
            <Bounce delay={200}>
              <Box className={classes.gridItem}>
                <Text color={colors.deepBlue} my={3}>
                  Convinience
                </Text>
                <Box>
                  <Text className={classes.girdItemText}>
                    Trade from the comfort of your home. Have the feel of
                    comfortability and flexibility.
                  </Text>
                </Box>
              </Box>
            </Bounce>
            <Bounce delay={300}>
              <Box className={classes.gridItem}>
                <Text color={colors.deepBlue} textAlign="center" my={3}>
                  Expert Research Recommendations
                </Text>
                <Box>
                  <Text className={classes.girdItemText}>
                    Leading experts in crypto currencies such as Elon Musk
                    recommends CRYPT WAVI.
                  </Text>
                </Box>
              </Box>
            </Bounce>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WeAre;
