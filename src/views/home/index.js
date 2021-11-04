import { Box, Image, Text, useMediaQuery, Link } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import UnauthHeader from "../../components/header/UnauthHeader";
// import bg from "../../assets/bctBg.jpg";
import img from "../../assets/brain.gif";
import Button from "../../components/Button";
import Services from "./Services";
import Secured from "./Secured";
import WeAre from "./WeAre";
import Reviews from "./Reviews";
import Footer from "./Footer";
import colors from "../../utils/colors";
import logo from "../../assets/crylogo.png";

import { createUseStyles } from "react-jss";
import Assets from "./Assets";
import Borrow from "./Borrow";
import Carousel from "./Carousel";

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
    fontSize: "18px",
  };

  const goTo = (route) => {
    dispatch({ type: "SM_TOGGLE_NAV" });
    history.push(route);
  };

  return (
    <Box minH="150vh">
      {isMobile ? (
        <Box
          zIndex="banner"
          backgroundColor="#2d2b51"
          // backgroundColor="transparent"
          transition="0.8s"
          left="0"
          right="0"
          pos="fixed"
          height={smOpen ? "100vh" : "100px"}
          pl={2}
          pr={5}
          overflow="hidden"
        >
          <Box
            d="flex"
            height="100px"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box d="flex" alignItems="center">
              <Box
                w="50px"
                h="50px"
                d="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image src={logo} w="100%" h="100%" />
              </Box>
              <Text
                fontStyle="italic"
                fontWeight="bold"
                fontFamily="Audiowide, cursive"
                color="white"
                fontSize={14}
              >
                CRYPT WAVI
              </Text>
            </Box>

            <Text
              onClick={() => dispatch({ type: "SM_TOGGLE_NAV" })}
              color="white"
              className="fa fa-bars"
              aria-hidden="true"
              fontSize="18px"
            ></Text>
          </Box>

          <Box
            d="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <Link
              href="#contact"
              onClick={() => dispatch({ type: "SM_TOGGLE_NAV" })}
            >
              <Box className={classes.nav}>
                <Text style={headerTextColor}>Contact</Text>
              </Box>
            </Link>
            <Link
              onClick={() => dispatch({ type: "SM_TOGGLE_NAV" })}
              href="#services"
            >
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
      <Carousel />
      <Box
        h={isMobile ? "60vh" : "100vh"}
        d="flex"
        px={isTab ? "10px" : "28px"}
      >
        <Box
          w="100%"
          h="100%"
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          zIndex="100"
          mt={isMobile && "10"}
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
              Crypt Wavi is the easiest place to buy, sell and earn
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
          <Box width="40%" display={isMobile && "none"} mt="28" mr="50px">
            <Image w="100%" h="100%" src={img} />
          </Box>
        </Box>
      </Box>
      {/* <Box> */}

      {/* </Box> */}
      <Services />
      <Secured />
      <Assets />
      <Borrow />
      <WeAre />
      <Reviews />
      <Footer />
    </Box>
  );
};

export default Home;
