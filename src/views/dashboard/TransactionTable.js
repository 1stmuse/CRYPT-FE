import { Box, Text, Table, Thead, Th, Tr, Tbody, Td } from "@chakra-ui/react";
import React from "react";
import colors from "../../utils/colors";
import { useSelector } from "react-redux";
import moment from "moment";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  status: {
    maxWidth: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    paddingTop: "3px",
    paddingBottom: "3px",
    color: "white",
    fontWeight: "bold",
  },
});

const TransactionTable = () => {
  const classes = useStyles();
  const [data, setData] = React.useState([]);

  const { token, id } = useSelector((state) => state.user);

  const bg = (status) => {
    let style;
    switch (status.toLowerCase()) {
      case "pending":
        style = "yellow";
        break;
      case "failed":
        style = "red";
        break;
      case "settled":
        style = colors.primary;
        break;
      default:
        style = "null";
        break;
    }
    return style;
  };

  const getData = () => {
    fetch(`http://localhost:8000/api/transactions/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data.data.transactions))
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getData();
  }, []);

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
              <Th>Status</Th>
              <Th>Type</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.slice(0, 5).map((ob, ind) => (
              <Tr key={ind}>
                <Td>
                  <Text>{moment(ob.createdAt).format("D MMM YYYY")}</Text>
                </Td>
                <Td>
                  <Text className={classes.status} bg={bg(ob.status)}>
                    {ob.status}
                  </Text>
                </Td>
                <Td>
                  <Text>{ob.type}</Text>
                </Td>
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
