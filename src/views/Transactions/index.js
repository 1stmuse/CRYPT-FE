import {
  Box,
  Divider,
  Select,
  Text,
  Thead,
  Table,
  Th,
  Tr,
  Td,
  Tbody,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import StatCard from "../../components/statCards";
import colors from "../../utils/colors";
import moment from "moment";
import { createUseStyles } from "react-jss";
import { useModal } from "../../hooks/usemodal";
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
});

const Transactions = ({ history }) => {
  // const { id } = useSelector((state) => state.user);
  const [isMobile] = useMediaQuery(["(max-width: 800px)"]);
  const [data, setData] = React.useState([]);
  const [status, setStatus] = React.useState("all");
  const classes = useStyles();
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  const { show } = useModal();

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

  const failedTF = data.filter((ob) => ob.status === "failed");
  const successTF = data.filter((ob) => ob.status === "settled");

  const filteredData = data.filter((ob) => {
    if (status === "all") return ob;

    return ob.status === status;
  });

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

  React.useEffect(() => {
    console.log(token, id, "tokens");
    getData();
  }, [token, id]);

  return (
    <Box mt="10">
      <Text fontSize="2xl" color={colors.deepBlue}>
        Statistics
      </Text>
      <Box d="flex" alignItems="center" flexWrap="wrap">
        <StatCard text="Total Transactions" amount={data.length} />
        <StatCard
          text="Succesfull Transactions"
          amount={successTF.length}
          color={colors.primary}
        />
        <StatCard
          text="Failed Transactions"
          amount={failedTF.length}
          color="red"
        />
      </Box>
      <Box
        mt="10"
        bg="white"
        minH="400px"
        pt="5"
        borderRadius="15px"
        w={isMobile ? "100%" : "80%"}
      >
        <Box
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          px="10"
        >
          <Text>Transactions</Text>
          <Box>
            <Select
              defaultValue={status}
              onChange={(val) => setStatus(val.currentTarget.value)}
            >
              <option value="all">All</option>
              <option value="settled">Succesfull</option>
              <option value="failed">Failed</option>
              <option value="pending">Pending</option>
            </Select>
          </Box>
        </Box>
        <Divider mt="4" />
        {!data.length ? (
          <Box minH="200" d="flex" alignItems="center" justifyContent="center">
            <Text>No Transactions to show !!</Text>
          </Box>
        ) : (
          <Box overflowX="scroll">
            <Table variant="simple" bg="white">
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Status</Th>
                  <Th>Type</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredData.map((ob, ind) => (
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
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Transactions;
