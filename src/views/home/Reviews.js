import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import colors from "../../utils/colors";
import { createUseStyles } from "react-jss";
import { ReactComponent as Quote } from "../../assets/quote.svg";
import Bounce from "react-reveal/Bounce";
import face1 from "../../assets/face1.png";
import face2 from "../../assets/face2.jpg";
import face3 from "../../assets/face3.jpg";

const useStyles = createUseStyles({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  gridItem: {
    maxWidth: "350px",
    minHeight: "270px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    border: `1px solid ${colors.ash}`,
    padding: "10px 15px",
    marginBottom: "40px",
    position: "relative",
    boxShadow: "0px 3px 0px 0px rgb(235 237 238)",
  },
  girdItemText: {
    textAlign: "center",
    fontStyle: "italic",
  },
  count: {
    color: colors.deepBlue,
    fontSize: "25px",
  },
  quoteBox: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
});

const Profile = ({ img, name }) => {
  return (
    <Box d="flex" pos="absolute" bottom="-5">
      <Box w="70px" h="70px" borderRadius="50%" overflow="hidden" mr={4}>
        <Image src={img} />
      </Box>
      <Box>
        <Text> {name} </Text>
        <Text color={colors.brown} fontSize="12px">
          Customer
        </Text>
      </Box>
    </Box>
  );
};

const Reviews = () => {
  const classes = useStyles();
  return (
    <Box className={classes.main} minH="100vh">
      <Box w="80%">
        <Text textAlign="center" fontSize="4xl">
          Customer Reviews
        </Text>
        <Text mt={4} textAlign="center" color={colors.brown}>
          We welcome feedback from our members as it helps us optimize the site
          to better service their needs.
        </Text>
        <Box mt={5}>
          <Box d="flex" flexWrap="wrap" mb={5} justifyContent="space-around">
            <Bounce delay={100}>
              <Box className={classes.gridItem}>
                <Box className={classes.quoteBox}>
                  <Quote height="50px" />
                  <Text ml={3} color={colors.brown} fontSize="2xl">
                    Good Service
                  </Text>
                </Box>
                <Box>
                  <Text className={classes.girdItemText}>
                    “I have only been with the stock pick system and short time
                    and so for have had very good results. 34 trades with only
                    one loss and that amount was only 1.35%”
                  </Text>
                </Box>
                {/* <Box> */}
                <Profile img={face1} name="JOSE CHRONISTER" />
                {/* </Box> */}
              </Box>
            </Bounce>
            <Bounce delay={200}>
              <Box className={classes.gridItem}>
                <Box className={classes.quoteBox}>
                  <Quote height="50px" />

                  <Text ml={3} color={colors.brown} fontSize="2xl">
                    Great Discovery
                  </Text>
                </Box>
                <Box>
                  <Text className={classes.girdItemText}>
                    “What a great discovery. This is what I have been looking
                    for. I don’t want to Daytrade. On the other hand, I do not
                    want to sit on it for a long time before I sell”
                  </Text>
                </Box>
                <Profile img={face2} name="LISA GREENE" />
              </Box>
            </Bounce>
            <Bounce delay={300}>
              <Box className={classes.gridItem}>
                <Box className={classes.quoteBox}>
                  <Quote height="50px" />
                  <Text ml={3} color={colors.brown} fontSize="2xl">
                    Easy to Follow
                  </Text>
                </Box>
                <Box>
                  <Text className={classes.girdItemText}>
                    “After searching for a site with recommendations that make
                    sense and easy to follow I finally found one. Took about
                    profit first and I’m just getting into the system”
                  </Text>
                </Box>
                <Profile name="KATHERYN BROWN" img={face3} />
              </Box>
            </Bounce>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Reviews;
