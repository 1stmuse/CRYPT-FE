import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../../utils/colors";
import StatCard from "../../components/statCards";
import welcome from "../../assets/welcome.svg";
import Market from "./Market";
import TransactionTable from "./TransactionTable";
import { useSelector } from "react-redux";

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
  const [isMobile, isTab] = useMediaQuery([
    "(max-width: 850px)",
    "(max-width: 1050px)",
  ]);
  const [data, setData] = React.useState([]);
  // const { debt } = useSelector((state) => state.user);
  const [debt, setDebt] = React.useState(0);
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  console.log(debt, "debt balaance");

  const failedTF = data.filter((ob) => ob.status === "failed");
  const successTF = data.filter((ob) => ob.status === "settled");

  const getData = () => {
    fetch(`https://cryptwavi.herokuapp.com/api/transactions/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data.data.transactions))
      .catch((err) => console.log(err));
  };

  const getDebtBalance = () => {
    fetch(`https://cryptwavi.herokuapp.com/api/user/debt`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setDebt(data.data.debt))
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getData();
    getDebtBalance();
  }, []);

  return (
    <Box width="100%" pb="20">
      <Box
        mt="10"
        d="flex"
        flexDir={isMobile ? "column" : "row"}
        justifyContent="space-between"
      >
        <Box mr="12" order={isMobile && "2"} width={isMobile ? "100%" : "50%"}>
          <Text fontSize="2xl" color={colors.white}>
            Quick Stats
          </Text>
          <Box
            d="flex"
            alignItems="center"
            flexWrap="wrap"
            // justifyContent="flex-start"
            mt="5px"
            w={isMobile ? "100%" : "500px"}
          >
            <Box mb="3" mr={isMobile && "10"} w={isMobile && "40%"}>
              <StatCard text="Total Transactions" amount={data.length} />
            </Box>
            <Box mb="3" w={isMobile && "40%"}>
              <StatCard
                text="Succesfull Transactions"
                amount={successTF.length}
                color={colors.primary}
              />
            </Box>
            {/* </Box>
          <Box
            d="flex"
            alignItems="center"
            justifyContent="flex-start"
            mt="5px"
          > */}
            <Box mb="3" mr={isMobile && "10"} w={isMobile && "40%"}>
              <StatCard
                text="Failed Transactions"
                amount={failedTF.length}
                color="red"
              />
            </Box>
            <Box mb="3" w={isMobile && "40%"}>
              <StatCard text="Debt Owed" amount={debt} color="red" />
            </Box>
          </Box>
        </Box>
        <Box
          h="250px"
          // border="1px solid red"
          order={isMobile && "1"}
          px="5"
          py="10"
          mb={isMobile && "5"}
          borderRadius="15px"
          alignSelf="flex-end"
          flexGrow="1"
          bgImg={welcome}
          d="flex"
          alignItems="center"
        >
          <Box>
            <Text fontSize={isTab ? "2xl" : "3xl"} color="white">
              Welcome to CRYPTWAVILOAN
            </Text>
            <Text color="white" mt="10px" fontSize="15px">
              Here are CRYPTWAVILOAN you are allowed to buy and sell BTC seamlessly
              in just about 2 basic steps and also borrow cash for whenever you
              need it
            </Text>
          </Box>
        </Box>
      </Box>
      <Market />
      <TransactionTable data={data} />
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
