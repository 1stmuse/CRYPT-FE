import { Box, Text, Table, Tbody, Thead, Th, Tr, Td } from "@chakra-ui/react";
import React from "react";
import moment from "moment";

const Users = ({ data = [] }) => {
  return (
    <Box>
      <Box minH="200px" bg="white">
        <Table variant="simple" bg="white">
          <Thead>
            <Tr>
              <Th>Firstname</Th>
              <Th>Lastname</Th>
              <Th>Email</Th>
              <Th>Date Joined</Th>
              <Th>Debt Amount</Th>
              {/* <Th></Th> */}
            </Tr>
          </Thead>
          <Tbody>
            {data.slice(0, 5).map((ob, ind) => (
              <Tr key={ind}>
                <Td>{ob.firstname}</Td>
                <Td>{ob.lastname}</Td>
                <Td>{ob.email}</Td>
                <Td>
                  <Text>{moment(ob.createdAt).format("D MMM YYYY")}</Text>
                </Td>
                <Td>
                  <Text>{ob.debt}</Text>
                </Td>
                {/* <Td
                  d="flex"
                  alignItems="center"
                  cursor="pointer"
                  // onClick={() => showInfo(ob)}
                >
                  <Text
                    color="red.600"
                    className="fa fa-eye"
                    aria-hidden="true"
                    mr="5px"
                  />
                  <Text color="red.600">View</Text>
                </Td> */}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default Users;
