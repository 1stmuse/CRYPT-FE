import "./styles.css";
import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import UnauthHeader from "../../components/header/UnauthHeader";
import bg from "../../assets/bctBg.jpg";
import img from "../../assets/btc-vallet.png";
import Button from "../../components/Button";
import Services from "./Services";
import Secured from "./Secured";
import WeAre from "./WeAre";
import Reviews from "./Reviews";
import Footer from "./Footer";

const Home = ({ history }) => {
  return (
    <Box minH="150vh">
      <Box position="relative" h="100vh" bgImg={bg} d="flex" px="28">
        <Box
          position="absolute"
          left="0"
          right="0"
          top="0"
          height="100vh"
          bg="rgba(0,0,0, 0.8)"
        />
        <UnauthHeader />
        <Box
          w="100%"
          h="100%"
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          zIndex="100"
        >
          <Box id="top" w="50%" mt="20px">
            <Text fontSize="5xl" color="white" textTransform="uppercase">
              Don’t just buy Bitcoin, here you can loan IT.
            </Text>
            <Text fontSize="15px" mt={5} color="white">
              CryptBliz is the easiest place to buy, sell and earn
              cryptocurrency. Sign up and start earning today.
            </Text>
            <Button
              type="primary"
              mt="55px"
              onClick={() => history.push("signup")}
            >
              GET STARTED
            </Button>
          </Box>
          <Box mt="28" mr="50px">
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
