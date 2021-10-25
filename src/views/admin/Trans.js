import { Box, Text, Table, Thead, Th, Tr, Tbody, Td } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import colors from "../../utils/colors";
import moment from "moment";
import { createUseStyles } from "react-jss";
import { useModal } from "../../hooks/usemodal";
import TransInfo from "./transInfo";
import io from "socket.io-client";
import Alert from "../../utils/Alert";

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

const Trans = ({ data = [] }) => {
  const classes = useStyles();
  const { show } = useModal();
  const [socket, setSocket] = useState(null);
  const token = localStorage.getItem("token");

  const socketInit = () => {
    const newSock = io("https://cryptwavi.herokuapp.com", {
      query: {
        id: token,
      },
    });

    newSock.on("connected", (message) => {
      console.log(message);
      Alert("success", "connected");
    });

    newSock.on("disconnection", () => {
      setSocket(null);
      Alert("error", "socket disconnected");
    });

    setSocket(newSock);
  };
  useEffect(() => {
    // console.log("leaked");
    socketInit();
  }, []);

  const showInfo = (data) => {
    show({
      component: <TransInfo data={data} socket={socket} />,
    });
  };

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

  return (
    <Box>
      <Box bg="white" w="100%" overflow="scroll" maxH="100vh">
        <Table variant="simple" bg="white" w="100%">
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Status</Th>
              <Th>Type</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((ob, ind) => (
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
                  <Text>{ob.type.toUpperCase()}</Text>
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
            width="100%"
          >
            <Text>There are currently no transaction to display</Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Trans;
