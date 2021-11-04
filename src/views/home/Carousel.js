import { Box, Image, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import ca1 from "../../assets/ca1.png";
import ca2 from "../../assets/ca2.png";
import bg1 from "../../assets/bg1.png";
import { createUseStyles } from "react-jss";
import colors from "../../utils/colors";

const useStyles = createUseStyles({
  slide: {
    paddingTop: "70px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    // backgroundColor: "white",
  },
});

const Carousel = () => {
  const classes = useStyles();
  const [isTab, isMobile, smMobile] = useMediaQuery([
    "(max-width: 1000px)",
    "(max-width:800px)",
    "(max-width: 650px)",
  ]);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box

    //   className="carrousel_wrapper"

    //   border="1px solid red"
    >
      <Slider {...settings}>
        <Box>
          <Box className={classes.slide} bgImg={bg1} bgPos="right">
            <Box pl="16">
              <Text
                width="50%"
                fontSize={isTab ? "3xl" : "5xl"}
                mt="4"
                textTransform="uppercase"
                color={colors.white}
              >
                The Future of Cryptocurrency lending an purchasing is right HERE
              </Text>
              <Text fontSize="15px" mt={5} color={colors.white}>
                Crypt Wavi is the easiest place to buy, sell and earn
                cryptocurrency. Sign up and start earning today. We've got you
                covered and secured.
              </Text>
            </Box>
            {/* <Box w="50%">
              <Image src={ca1} />
            </Box> */}
          </Box>
        </Box>
        <Box>
          <Box bg="cornflowerblue" className={classes.slide}>
            <Box w="50%" px="10">
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
            </Box>
            <Box w="50%">
              <Image src={ca2} />
            </Box>
          </Box>
        </Box>
      </Slider>
    </Box>
  );
};

export default Carousel;
