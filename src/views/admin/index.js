import { Box, Text } from "@chakra-ui/react";
import React from "react";
import colors from "../../utils/colors";
import { createUseStyles } from "react-jss";
import Input from "../../components/Input";
import { Formik } from "formik";
import StatCard from "../../components/statCards";
import Button from "../../components/Button";

const useStyles = createUseStyles({
  tab: {
    cursor: "pointer",
    minWidth: "100px",
  },
});

const AdminDash = () => {
  const classes = useStyles();
  return (
    <Box bg={colors.ash} pos="fixed" left="0" right="0" top="0" bottom="0">
      <Box
        pos="fixed"
        left="0"
        right="0"
        top="0"
        h="70px"
        d="flex"
        alignItems="center"
        bg="white"
        px="16"
      >
        <Text fontSize="2xl" clor={colors.deepBlue}>
          CRYPTBLIS ADMIN
        </Text>
      </Box>
      <Box mt="20" w="70%" mx="auto">
        <Box d="flex">
          <StatCard text="Total Users" amount={0} />
          <StatCard text="Total Transactions" amount={0} />
        </Box>
        <Box d="flex" width="30%" justifyContent="space-around" mt="10">
          <Text className={classes.tab}>Add Infos</Text>
          <Text className={classes.tab}>Users</Text>
        </Box>
        <Box
          bg="white"
          d="flex"
          justifyContent="space-around"
          minH="300px"
          p="10"
          mt="5"
          borderRadius="15px"
        >
          <Box>
            <Formik
              initialValues={{
                address: "",
              }}
            >
              {({ values }) => (
                <Box>
                  <Box>
                    <Text>Add BTC address</Text>
                    <Input name="address" value={values.address} />
                  </Box>
                  <Box mt="10px">
                    <Button type="primary" width="80px">
                      ADD
                    </Button>
                  </Box>
                </Box>
              )}
            </Formik>
          </Box>
          <Box>
            <Formik
              initialValues={{
                name: "",
                number: "",
              }}
            >
              {({ values }) => (
                <Box>
                  <Box>
                    <Text>Bank name</Text>
                    <Input name="name" value={values.name} />
                  </Box>
                  <Box>
                    <Text>Account number</Text>
                    <Input name="number" value={values.number} />
                  </Box>
                  <Box mt="10px">
                    <Button type="primary" width="80px">
                      ADD
                    </Button>
                  </Box>
                </Box>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDash;
