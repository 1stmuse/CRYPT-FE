import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../../utils/colors";
import inc from "../../assets/increase.svg";
import dec from "../../assets/decrease.svg";
import StatCard from "../../components/statCards";
import welcome from "../../assets/welcome.svg";
import Market from "./Market";
import TransactionTable from "./TransactionTable";

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
    <Box width="100%" pb="20">
      <Box mt="10" d="flex" justifyContent="space-between">
        <Box mr="12">
          <Text fontSize="2xl" color={colors.deepBlue}>
            Quick Stats
          </Text>
          <Box
            d="flex"
            alignItems="center"
            justifyContent="flex-start"
            mt="5px"
          >
            <StatCard text="Total Transactions" amount="28,345" />
            <StatCard
              text="Succesfull Transactions"
              amount="120"
              color="#f35162"
            />
          </Box>
          <Box
            d="flex"
            alignItems="center"
            justifyContent="flex-start"
            mt="5px"
          >
            <StatCard text="Failed Transactions" amount="0" icon={inc} />
            <StatCard text="Debt Owed" amount="46" icon={dec} />
          </Box>
        </Box>
        <Box
          h="250px"
          borderRadius="15px"
          alignSelf="flex-end"
          flexGrow="1"
          bgImg={welcome}
          d="flex"
          alignItems="center"
        >
          <Box w="70%" ml="12">
            <Text fontSize="3xl" color="white">
              Welcome to CRYPTBLIS
            </Text>
            <Text color="white" mt="10px" fontSize="15px">
              Here are CRYPTBLIS you are allowed to buy and sell BTC seamlessly
              in just about 2 basic steps and also borrow cash for whenever you
              need it
            </Text>
          </Box>
        </Box>
      </Box>
      <Market />
      <TransactionTable />
    </Box>
  );
};

export default Dashboard;

// import { Box, Text } from "@chakra-ui/react";
// import React from "react";
// import { createUseStyles } from "react-jss";
// import colors from "../../utils/colors";
// import Btc from "./Btc";
// import Cash from "./Cash";

// const useStyles = createUseStyles({
//   tab: {
//     display: "flex",
//     justifyContent: "center",
//     cursor: "pointer",
//     flexGrow: 1,
//     paddingBottom: "5px",
//   },
// });

// const Dashboard = () => {
//   const classes = useStyles();
//   const [active, setActive] = React.useState(0);
//   return (
//     <Box width="50%" mx="20">
//       <Box d="flex" alignItems="center" px="5px">
//         <Box
//           className={classes.tab}
//           borderBottom={
//             active === 0
//               ? `3px solid ${colors.primary}`
//               : `3px solid ${colors.brown}`
//           }
//           onClick={() => setActive(0)}
//         >
//           <Text>BUY/SELL BTC</Text>
//         </Box>
//         <Box
//           className={classes.tab}
//           borderBottom={
//             active === 1
//               ? `3px solid ${colors.primary}`
//               : `3px solid ${colors.brown}`
//           }
//           onClick={() => setActive(1)}
//         >
//           <Text>LOAN/REPAY CASH</Text>
//         </Box>
//       </Box>
//       {active === 0 ? <Btc /> : <Cash />}
//     </Box>
//   );
// };

// export default Dashboard;
