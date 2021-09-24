import {
  Box,
  Text,
  Table,
  Thead,
  Th,
  Tr,
  Tbody,
  Td,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { observerMode } from "react-reveal/globals";
import colors from "../../utils/colors";

const TransactionTable = () => {
  const [data, setData] = React.useState([]);

  // const getData = () => {
  //   fetch(
  //     `https://api.nomics.com/v1/currencies/ticker?key=8e0604fa91a8c1b3967fa2faae6c362efb307d45&ids=BTC,ETH,XRP,LTC,ADA&interval=1d&per-page=50&page=1"`,
  //     {
  //       headers: {
  //         Origin: "https://crypy-blis-demo.netlify.app/",
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setData(data))
  //     .catch((err) => console.log(err));
  // };

  // React.useEffect(() => {
  //   getData();
  // }, []);

  return (
    <Box mt="12">
      <Text fontSize="2xl" color={colors.deepBlue}>
        Top Transactions
      </Text>
      <Box minH="200px" bg="white">
        <Table variant="simple" bg="white">
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Description</Th>
              <Th>Type</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((ob, ind) => (
              <Tr key={ind}>
                <Td d="flex" alignItems="center">
                  <Image he="30px" width="30px" mr="5px" src={ob.logo_url} />
                  <Text>{ob.name}</Text>
                </Td>
                <Td>${Math.trunc(ob.price).toLocaleString()} </Td>
                <Td color={ob["1d"].price_change_pct < 0 ? "red" : "green"}>
                  {ob["1d"].price_change_pct}%
                </Td>
                <Td> ${Math.trunc(ob.high).toLocaleString()} </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        {!data.length && (
          <Box
            d="flex"
            justifyContent="center"
            alignItems="center"
            minH="150px"
          >
            <Text>There are currently no transaction to display</Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default TransactionTable;
