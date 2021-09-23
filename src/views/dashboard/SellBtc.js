import { Box, Text, Select } from "@chakra-ui/react";
import React from "react";
import { Formik, yupToFormErrors } from "formik";
import Input from "../../components/Input";
import colors from "../../utils/colors";
import { createUseStyles } from "react-jss";
import Button from "../../components/Button";
import * as yup from "yup";

const useStyles = createUseStyles({
  labels: {
    color: colors.brown,
    fontStyle: "18px",
  },
});

const SellBtc = () => {
  const classes = useStyles();
  return (
    <Box mt="5">
      <Formik
        initialValues={{
          amount: 0,
          bank: "",
          account: "",
        }}
        validationSchema={yup.object({
          amount: yup.number().moreThan(0, "must input a value greater than 0"),
          bank: yup.string().required("bank field cannot be left blank"),
          account: yup
            .string()
            .required("account number field cannot be left blanck"),
        })}
        onSubmit={(val) => console.log(val)}
      >
        {({ values, handleSubmit }) => (
          <Box>
            <Box d="flex" alignItems="center">
              <Box mr="20">
                <Text className={classes.labels}>cash value</Text>
                <Box d="flex">
                  <Select
                    mr="5px"
                    w="100px"
                    // placeholder="Select transaction type"
                    //   onChange={(val) => setType(val.currentTarget.value)}
                    defaultValue="USD"
                  >
                    <option value="USD">USD</option>
                    <option value="NGN">NGN</option>
                  </Select>
                  <Input
                    type="text"
                    value={values.amount}
                    color={colors.deepBlue}
                    name="amount"
                  />
                </Box>
              </Box>
              <Box>
                <Text className={classes.labels}>BTC uquivalent</Text>
                <Text
                  py="1.5"
                  pl="1.5"
                  borderRadius="5px"
                  border={`1px solid ${colors.ash}`}
                >
                  000.000
                </Text>
              </Box>
            </Box>
            <Box mt="5" w="60%">
              <Text className={classes.labels}>CRYPTBLIS BTC address</Text>
              <Text className={classes.labels}>097gr45444555</Text>
            </Box>
            <Box mt="5">
              <Text className={classes.labels}>Your account details</Text>
              <Box>
                <Box d="flex" alignItems="center">
                  <Text minW="150px" className={classes.labels}>
                    Bank
                  </Text>
                  <Input
                    type="text"
                    color={colors.deepBlue}
                    name="bank"
                    value={values.bank}
                  />
                </Box>
                <Box d="flex" alignItems="center" mt="3">
                  <Text minW="150px" className={classes.labels}>
                    Account Number
                  </Text>
                  <Input
                    type="text"
                    color={colors.deepBlue}
                    name="acount"
                    value={values.account}
                  />
                </Box>
              </Box>
            </Box>
            <Box mt="5">
              <Button onClick={handleSubmit} width="100px" type="primary">
                Next
              </Button>
            </Box>
            <Box mt={4}>
              <Text>NOTE:</Text>
              <Text className={classes.labels}>
                Clicking next implies that you have tranfered the stated BTC
                ammount into CRYTBLIS BTC address and you are ready to upload
                prove of transfer
              </Text>
            </Box>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default SellBtc;
