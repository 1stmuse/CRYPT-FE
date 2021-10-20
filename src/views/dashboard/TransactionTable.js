import { Box, Text, Table, Thead, Th, Tr, Tbody, Td } from "@chakra-ui/react";
import React from "react";
import colors from "../../utils/colors";
import moment from "moment";
import { createUseStyles } from "react-jss";
import { useModal } from "../../hooks/usemodal";
import { useHistory } from "react-router-dom";
import TransactionInfo from "../../components/TransactionInfo";

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
  td: {
    minWidth: "180px",
  },
});

const TransactionTable = ({ data = [] }) => {
  const classes = useStyles();
  const { show } = useModal();
  const history = useHistory();

  const bg = (status) => {
    let style;
    switch (status.toLowerCase()) {
      case "pending":
        style = "orange";
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

  const showInfo = (data) => {
    show({
      component: <TransactionInfo data={data} history={history} />,
    });
  };

  return (
    <Box mt="12">
      <Text fontSize="2xl" color={colors.deepBlue}>
        Top Transactions
      </Text>
      <Box minH="200px" bg="white" overflowX="scroll">
        <Table variant="simple" size="lg" bg="white">
          <Thead>
            <Tr>
              <Th className={classes.td}>Date</Th>
              <Th className={classes.td}>Status</Th>
              <Th className={classes.td}>Type</Th>
              <Th className={classes.td}></Th>
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
                <Td cursor="pointer" onClick={() => showInfo(ob)}>
                  <Box d="flex" alignItems="center">
                    <Text
                      color="red.600"
                      className="fa fa-eye"
                      aria-hidden="true"
                      mr="5px"
                    />
                    <Text color="red.600">View</Text>
                  </Box>
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
