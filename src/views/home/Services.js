import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import pay from "../../assets/pay-online.png";
import Button from "../../components/Button";
import colors from "../../utils/colors";
import { ReactComponent as Laptop } from "../../assets/laptop.svg";
import { ReactComponent as Time } from "../../assets/time.svg";
import { ReactComponent as Column } from "../../assets/column.svg";
import { createUseStyles } from "react-jss";
import Bounce from "react-reveal/Bounce";

const styles = createUseStyles({
  gridItem: {
    width: "250px",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  girdItemText: {
    textAlign: "center",
    color: colors.brown,
  },
});

const Services = () => {
  const classes = styles();
  return (
    <Box minH="130vh" px="36">
      <Box d="flex" h="70vh" alignItems="center" mb="32">
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
      <Box d="flex" flexWrap="wrap" px={5} justifyContent="space-around">
        <Bounce delay={100}>
          <Box className={classes.gridItem}>
            <Laptop height="50px" />
            <Text my={3}>Secured</Text>
            <Box>
              <Text className={classes.girdItemText}>
                All your transactions are 100% secure. Encrypted connections and
                easy payment methods.
              </Text>
            </Box>
          </Box>
        </Bounce>
        <Bounce delay={200}>
          <Box className={classes.gridItem}>
            <Time height="50px" />
            <Text my={3}>Fast</Text>
            <Box>
              <Text className={classes.girdItemText}>
                Completely fluid experience. The operation will be performed
                instantly.
              </Text>
            </Box>
          </Box>
        </Bounce>
        <Bounce delay={300}>
          <Box className={classes.gridItem}>
            <Column height="50px" />
            <Text my={3}>Simplicity</Text>
            <Box>
              <Text className={classes.girdItemText}>
                In just three steps you will be able to sell bitcoin 24/7 using
                our simple interface.
              </Text>
            </Box>
          </Box>
        </Bounce>
      </Box>
    </Box>
  );
};

export default Services;
