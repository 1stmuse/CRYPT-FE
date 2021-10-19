import "./styles.css";
import { Box, Image, Text, useMediaQuery, Link } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import UnauthHeader from "../../components/header/UnauthHeader";
// import bg from "../../assets/bctBg.jpg";
import img from "../../assets/btc-vallet.png";
import Button from "../../components/Button";
import Services from "./Services";
import Secured from "./Secured";
import WeAre from "./WeAre";
import Reviews from "./Reviews";
import Footer from "./Footer";
import colors from "../../utils/colors";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  nav: {
    padding: "5px 0px",
    borderRadius: "10px",
    cursor: "pointer",
  },
});

const Home = ({ history }) => {
  const [isTab, isMobile, smMobile] = useMediaQuery([
    "(max-width: 1000px)",
    "(max-width:800px)",
    "(max-width: 650px)",
  ]);
  const dispatch = useDispatch();
  const { smOpen } = useSelector((state) => state.nav);
  const classes = useStyles();

  const headerTextColor = {
    color: "white",
    fontWeight: "bold",
    fontSize: "22px",
  };

  const goTo = (route) => {
    dispatch({ type: "SM_TOGGLE_NAV" });
    history.push(route);
  };

  return (
    <Box minH="150vh">
      <Box h="100vh" d="flex" px={isTab ? "10px" : "28px"}>
        {smMobile ? (
          <Box
            zIndex="banner"
            backgroundColor="#2d2b51"
            transition="0.8s"
            left="0"
            right="0"
            pos="fixed"
            height={smOpen ? "100vh" : "100px"}
            pl={10}
            pr={5}
            overflow="hidden"
          >
            <Box
              d="flex"
              height="100px"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text
                fontStyle="italic"
                fontWeight="bold"
                color="white"
                fontSize={isMobile ? 11 : 22}
              >
                CRYPTWAVILOAN
              </Text>
              <Text
                onClick={() => dispatch({ type: "SM_TOGGLE_NAV" })}
                color="white"
                className="fa fa-bars"
                aria-hidden="true"
              ></Text>
            </Box>

            <Box
              d="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
            >
              <Link href="#contact">
                <Box className={classes.nav}>
                  <Text style={headerTextColor}>Contact</Text>
                </Box>
              </Link>
              <Link href="#services">
                <Box className={classes.nav}>
                  <Text style={headerTextColor}>Services</Text>
                </Box>
              </Link>
              <Box
                className={classes.nav}
                onClick={() => goTo("login")}
                // bg="blueviolet"
              >
                <Text style={headerTextColor}>Login</Text>
              </Box>
              <Box className={classes.nav} onClick={() => goTo("signup")}>
                <Text style={headerTextColor}>Sign Up</Text>
              </Box>
            </Box>
          </Box>
        ) : (
          <UnauthHeader />
        )}
        <Box
          w="100%"
          h="100%"
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          zIndex="100"
        >
          <Box
            id="top"
            w={isMobile ? "80%" : "50%"}
            mt="20px"
            ml={isMobile && "8"}
          >
            <Text
              fontSize={isTab ? "3xl" : "5xl"}
              mt="4"
              textTransform="uppercase"
              color={colors.deepBlue}
            >
              Don’t just buy Bitcoin, here you can loan IT.
            </Text>
            <Text fontSize="15px" mt={5} color={colors.deepBlue}>
              CryptBliz is the easiest place to buy, sell and earn
              cryptocurrency. Sign up and start earning today. We've got you
              covered and secured.
            </Text>
            <Button
              type="primary"
              // bg={colors.deepBlue}
              mt="55px"
              onClick={() => history.push("signup")}
            >
              GET STARTED
            </Button>
          </Box>
          <Box display={isMobile && "none"} mt="28" mr="50px">
            <Image src={img} className="image" />
          </Box>
        </Box>
      </Box>
      <Services />
      <Secured />
      <WeAre />
      <Reviews />
      <Footer />
    </Box>
  );
};

export default Home;
