import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import colors from "../../utils/colors";
import { createUseStyles } from "react-jss";
import Input from "../../components/Input";
import { Formik } from "formik";
import StatCard from "../../components/statCards";
import Button from "../../components/Button";
import Trans from "./Trans";
import Users from "./Users";
import * as yup from "yup";

const useStyles = createUseStyles({
  tab: {
    cursor: "pointer",
    minWidth: "100px",
  },
});

const AdminDash = () => {
  const classes = useStyles();
  const [active, setActive] = useState(0);
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");

  const addInfo = (values, actions) => {
    const payload = {
      bank_name: values.name,
      bank_number: values.number,
      btc_address: values.address,
    };
    fetch("https://cryptblis.herokuapp.com/api/admin/info", {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          console.log(data);
          actions.resetForm();
        }
      })
      .catch((err) => {
        console.log(err);
        actions.resetForm();
      });
  };

  const getTransactions = () => {
    fetch(`https://cryptblis.herokuapp.com/api/transactions/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data.data.transactions))
      .catch((err) => console.log(err));
  };

  const getUsers = () => {
    fetch("https://cryptblis.herokuapp.com/api/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data.users);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTransactions();
    getUsers();
  }, []);

  return (
    <Box
      bg={colors.ash}
      pos="fixed"
      left="0"
      right="0"
      top="0"
      bottom="0"
      overflow="auto"
    >
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
      <Box mt="28" w="80%" mx="auto">
        <Box d="flex">
          <StatCard text="Total Users" amount={users.length} />
          <StatCard text="Total Transactions" amount={data.length} />
        </Box>
        <Box d="flex" width="40%" justifyContent="space-around" mt="10">
          <Text onClick={() => setActive(0)} className={classes.tab}>
            Transactions
          </Text>
          <Text onClick={() => setActive(1)} className={classes.tab}>
            Add Infos
          </Text>
          <Text onClick={() => setActive(2)} className={classes.tab}>
            Users
          </Text>
        </Box>
        <Box maxW="100%" mt="5">
          {active === 0 ? (
            <Trans data={data} />
          ) : active === 2 ? (
            <Users data={users} />
          ) : (
            <Box
              bg="white"
              d="flex"
              // justifyContent="space-around"
              minH="300px"
              maxW="60%"
              p="10"
              mt="5"
              borderRadius="15px"
            >
              <Box>
                <Formik
                  initialValues={{
                    address: "",
                    name: "",
                    number: "",
                  }}
                  validationSchema={yup.object({
                    address: yup.string().required("input BTC address"),
                    name: yup.string().required("input bank account name"),
                    number: yup.string().required("input bank account number"),
                  })}
                  onSubmit={addInfo}
                >
                  {({ values, handleSubmit }) => (
                    <Box>
                      <Box>
                        <Text>Add BTC address</Text>
                        <Input name="address" value={values.address} />
                      </Box>
                      <Box>
                        <Text>Bank name</Text>
                        <Input name="name" value={values.name} />
                      </Box>
                      <Box>
                        <Text>Account number</Text>
                        <Input name="number" value={values.number} />
                      </Box>
                      <Box mt="10px">
                        <Button
                          onClick={handleSubmit}
                          type="primary"
                          width="80px"
                        >
                          ADD
                        </Button>
                      </Box>
                    </Box>
                  )}
                </Formik>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDash;
