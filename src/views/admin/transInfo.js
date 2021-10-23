import { Box, Link, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useModal } from "../../hooks/usemodal";
import Button from "../../components/Button";
import colors from "../../utils/colors";
import moment from "moment";
import Alert from "../../utils/Alert";

const TransInfo = ({ data, socket }) => {
  // console.log(data, "infodata");
  const [loading, setLoading] = useState(false);
  const { close } = useModal();

  const resolve = () => {
    setLoading(true);
    socket.emit("resolve", data, (err, message) => {
      if (err) {
        Alert("error", "could not resolve transaction");
      }
      setLoading(false);
    });
    close();
    window.location.reload();
    return;
  };

  const accept = () => {
    socket.emit("accept", data, (err, message) => {
      if (err) {
        Alert("error", message);
      }
      Alert("success", message);
      window.location.reload();
      close();
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
    <Box bg="white" minW="400px" borderRadius="15px" px="5" py="5">
      <Box d="flex" justifyContent="space-between">
        <Box mr="5" flexGrow="1">
          <Box d="flex" justifyContent="space-between" alignItems="center">
            <Text>Date</Text>
            <Text>{moment(data.createdAt).format("D MMM YYYY")} </Text>
          </Box>
          <Box
            d="flex"
            mt="5"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text>TYPE</Text>
            <Text> {data.type} </Text>
          </Box>
          <Box
            d="flex"
            mt="5"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text>Status</Text>
            <Text
              p="5px"
              fontWeight="bold"
              color="white"
              borderRadius="7px"
              bg={bg(data.status)}
            >
              {data.status}
            </Text>
          </Box>
        </Box>
        <Box>
          <Link href={`${data.image}`}>
            <Image w="150px" height="150px" src={data.image} />
          </Link>
        </Box>
      </Box>
      <Box d="flex" alignItems="center" justifyContent="space-around" mt="5">
        <Button
          _hover={{ backgroundColor: "red" }}
          width="100px"
          bg="red"
          onClick={() => close()}
        >
          CLOSE
        </Button>
        {data.type.toLowerCase().includes("loan") && !data.accepted && (
          <Button
            _hover={{ backgroundColor: "blue" }}
            width="100px"
            bg={colors.deepBlue}
            onClick={accept}
          >
            ACCEPT
          </Button>
        )}
        {data.status.toLowerCase() === "pending" && (
          <Button
            _hover={{ backgroundColor: "blue" }}
            width="100px"
            bg={colors.deepBlue}
            onClick={resolve}
            isLoading={loading}
          >
            RESOLVE
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default TransInfo;
