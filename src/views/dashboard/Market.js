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
  Link,
} from "@chakra-ui/react";
import React from "react";
import { observerMode } from "react-reveal/globals";
import colors from "../../utils/colors";

const Market = () => {
  const [data, setData] = React.useState([]);

  const getData = () => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Ccardano%2Cripple%2Ctether&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=24h`
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <Box mt="12">
      <Text fontSize="2xl" color={colors.deepBlue}>
        Market
      </Text>
      {/* <a href="https://nomics.com">
        Crypto Market Cap & Pricing Data Provided By Nomics
      </a> */}
      <Box mt="5">
        <Table variant="simple" bg="white">
          <Thead>
            <Tr>
              <Th>Asset</Th>
              <Th>Price</Th>
              <Th>24h Change</Th>
              <Th>Highest</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((ob, ind) => (
              <Tr key={ind}>
                <Td d="flex" alignItems="center">
                  <Image he="30px" width="30px" mr="5px" src={ob.image} />
                  <Text>{ob.name}</Text>
                </Td>
                <Td>${Math.trunc(ob.current_price).toLocaleString()} </Td>
                <Td
                  color={
                    ob["price_change_percentage_24h"] < 0 ? "red" : "green"
                  }
                >
                  {ob["price_change_percentage_24h"]}%
                </Td>
                <Td> ${Math.trunc(ob.ath).toLocaleString()} </Td>
              </Tr>
            ))}
            {/* <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yard</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr> */}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default Market;
