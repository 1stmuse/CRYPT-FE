import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import pay from "../../assets/pay-online.png";
import Button from "../../components/Button";
import colors from "../../utils/colors";
import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  gridItem: {
    border: "1px solid grey",
    width: "250px",
    height: "200px",
  },
});

const Services = () => {
  const classes = styles();
  return (
    <Box minH="130vh" px="36">
      <Box d="flex" h="70vh" alignItems="center">
        <Box w="50%">
          <Image src={pay} />
        </Box>
        <Box w="50%" px={5}>
          <Text fontSize="4xl">
            Crafted For Secured, and Reliable Transactions.
          </Text>
          <Box mt={3}>
            <Text color={colors.brown}>
              Perry Pays provides a Bitcoin marketplace where people sell
              Bitcoin easily and safely with notable simple UI, friendly online
              customer support 24/7 and lowest fee compared with major players
              on the market.
            </Text>
            <Text color={colors.brown} mt={3}>
              Our team is comprised mostly by banking professionals with
              extensive experience in financial products, E-currencies, Payment
              System and Agile Software Development, and others.
            </Text>

            <Button type="primary" borderRadius="20px" mt={5}>
              CREATE ACCOUNT
            </Button>
          </Box>
        </Box>
      </Box>
      <Box d="flex" px={5} justifyContent="space-around">
        <Box className={classes.gridItem}>
          <p class="fa fa-laptop"></p>
        </Box>
        <Box className={classes.gridItem} />
        <Box className={classes.gridItem} />
      </Box>
    </Box>
  );
};

export default Services;
