import { Box, Text, Link } from "@chakra-ui/react";
import React from "react";
import colors from "../../utils/colors";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: {
    display: "flex",
    // backgroundColor: "#222425",
    backgroundColor: "white",
    padding: "15px 55px",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.main} minH="40vh">
      {/* <Box>
        <Box>
          <Text>Contact Info</Text>
          <Box>
            <Box>
              <Link href="#top" className="fa fa-phone" aria-hidden="true" />
              <Text>+234 9087 875 6789</Text>
            </Box>
            <Box>
              <Text className="fa fa-envelope" aria-hidden="true" />
              <Text>info@cryptblis.com</Text>
            </Box>
            <Box>
              <Text className="fa fa-map-marker" aria-hidden="true" />
              <Text>Nigeria</Text>
            </Box>
          </Box>
        </Box>
      </Box> */}
      <Box>
        <Box>
          <Box d="flex" alignItems="center">
            <Text fontSize="7xl" mr={10}>
              CRYPTBLIS
            </Text>
            <Box d="flex" width="200px" justifyContent="space-around">
              <Text className="fa fa-twitter fa-2x" aria-hidden="true" />
              <Text className="fa fa-facebook fa-2x" aria-hidden="true" />
              <Text className="fa fa-instagram fa-2x" aria-hidden="true" />
            </Box>
          </Box>
          <Box>
            <Text>
              Made with ❤ in Nigeria © 2021 CryptBlis, ApS. All rights reserved.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
