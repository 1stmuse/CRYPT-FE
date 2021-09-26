import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useModal } from "../hooks/usemodal";
import Button from "../components/Button";
import colors from "../utils/colors";
import moment from "moment";

const TransactionInfo = ({ data }) => {
  const { close } = useModal();
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
          <Image w="150px" height="150px" src={data.image} />
        </Box>
      </Box>
      <Box d="flex" alignItems="center" justifyContent="center" mt="5">
        <Button
          _hover={{ backgroundColor: "red" }}
          width="100px"
          bg="red"
          onClick={() => close()}
        >
          CLOSE
        </Button>
      </Box>
    </Box>
  );
};

export default TransactionInfo;
