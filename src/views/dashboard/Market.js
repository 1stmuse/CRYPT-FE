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
import colors from "../../utils/colors";

const Market = () => {
  const [data, setData] = React.useState([]);

  const getData = () => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24h"
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
      <Text fontSize="2xl" color={colors.white}>
        Market
      </Text>
      <Box mt="5" overflowX="scroll">
        <Table variant="simple" bg="white">
          <Thead>
            <Tr>
              <Th>Asset</Th>
              <Th>Price</Th>
              <Th>24h Change</Th>
              <Th>24h Low</Th>
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
                <Td color="red">
                  {" "}
                  ${Math.trunc(ob.low_24h).toLocaleString()}{" "}
                </Td>
                <Td> ${Math.trunc(ob.ath).toLocaleString()} </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default Market;
