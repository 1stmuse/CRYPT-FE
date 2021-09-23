import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../../utils/colors";
import Btc from "./Btc";
import Cash from "./Cash";

const useStyles = createUseStyles({
  tab: {
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
    flexGrow: 1,
    paddingBottom: "5px",
  },
});

const Dashboard = () => {
  const classes = useStyles();
  const [active, setActive] = React.useState(0);
  return (
    <Box width="50%" mx="20">
      <Box d="flex" alignItems="center" px="5px">
        <Box
          className={classes.tab}
          borderBottom={
            active === 0
              ? `3px solid ${colors.primary}`
              : `3px solid ${colors.brown}`
          }
          onClick={() => setActive(0)}
        >
          <Text>BUY/SELL BTC</Text>
        </Box>
        <Box
          className={classes.tab}
          borderBottom={
            active === 1
              ? `3px solid ${colors.primary}`
              : `3px solid ${colors.brown}`
          }
          onClick={() => setActive(1)}
        >
          <Text>LOAN/REPAY CASH</Text>
        </Box>
      </Box>
      {active === 0 ? <Btc /> : <Cash />}
    </Box>
  );
};

export default Dashboard;
