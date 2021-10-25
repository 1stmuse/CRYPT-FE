import { Box, Text, useMediaQuery } from "@chakra-ui/react";
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
import Alert from "../../utils/Alert";

const useStyles = createUseStyles({
  tab: {
    cursor: "pointer",
    minWidth: "100px",
  },
});

const AdminDash = () => {
  const [isMobile] = useMediaQuery(["(max-width: 800px)"]);
  const classes = useStyles();
  const [active, setActive] = useState(0);
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");
  const [adminInfo, setAdminInfo] = useState({
    bank_name: "",
    bank_number: "",
    btc_address: "",
    ethereum_address: "",
    litecoin_address: "",
    dogecoin_address: "",
  });

  const addInfo = (values, actions) => {
    const payload = {
      bank_name: values.name,
      bank_number: values.number,
      btc_address: values.btc_address,
      ethereum_address: values.eth_address,
      dogecoin_address: values.doge_address,
      litecoin_address: values.lt_address,
    };
    fetch("https://cryptwavi.herokuapp.com/api/admin/info", {
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
    fetch(`https://cryptwavi.herokuapp.com/api/transactions/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data.data.transactions))
      .catch((err) => console.log(err));
  };

  const getUsers = () => {
    fetch("https://cryptwavi.herokuapp.com/api/users", {
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

  const getAdminInfo = () => {
    fetch("https://cryptwavi.herokuapp.com/api/admin/info", {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.info);
        if (data.data.info) {
          setAdminInfo(data.data.info);
        }
      })
      .catch((err) => Alert("error", "a problem occured"));
  };

  useEffect(() => {
    getTransactions();
    getUsers();
    getAdminInfo();
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
        <Box
          d="flex"
          width={isMobile ? "100%" : "40%"}
          justifyContent="space-around"
          mt="10"
        >
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
              <Box w="100%">
                <Formik
                  initialValues={{
                    btc_address: adminInfo.btc_address || "",
                    eth_address: adminInfo.ethereum_address || "",
                    lt_address: adminInfo.litecoin_address || "",
                    doge_address: adminInfo.dogecoin_address || "",
                    name: adminInfo.bank_name || "",
                    number: adminInfo.bank_number || "",
                  }}
                  validationSchema={yup.object({
                    btc_address: yup.string().required("input BTC address"),
                    eth_address: yup.string().required("input Eth address"),
                    lt_address: yup.string().required("input Litecoin address"),
                    doge_address: yup.string().required("input Doge address"),
                    name: yup.string().required("input bank account name"),
                    number: yup.string().required("input bank account number"),
                  })}
                  onSubmit={addInfo}
                >
                  {({ values, handleSubmit, isSubmitting }) => (
                    <Box>
                      <Box d="flex" justifyContent="space-between" mb="5">
                        <Box>
                          <Text>Bitcoin address</Text>
                          <Input
                            name="btc_address"
                            value={values.btc_address}
                          />
                        </Box>
                        <Box>
                          <Text>Ethereum address</Text>
                          <Input
                            name="eth_address"
                            value={values.eth_address}
                          />
                        </Box>
                      </Box>
                      <Box d="flex" justifyContent="space-between" mb="5">
                        <Box>
                          <Text>Dogecoin address</Text>
                          <Input
                            name="doge_address"
                            value={values.doge_address}
                          />
                        </Box>
                        <Box>
                          <Text>Litecoin address</Text>
                          <Input name="lt_address" value={values.lt_address} />
                        </Box>
                      </Box>
                      <Box d="flex" justifyContent="space-between" mb="5">
                        <Box>
                          <Text>Bank name</Text>
                          <Input name="name" value={values.name} />
                        </Box>
                        <Box>
                          <Text>Account number</Text>
                          <Input name="number" value={values.number} />
                        </Box>
                      </Box>
                      <Box mt="10px">
                        <Button
                          onClick={handleSubmit}
                          type="primary"
                          width="80px"
                          isLoading={isSubmitting}
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
