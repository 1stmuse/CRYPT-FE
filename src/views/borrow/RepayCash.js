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

const RepayCash = () => {
  const classes = useStyles();
  return (
    <Box mt="5">
      <Formik
        initialValues={{
          btc: "",
          amount: 0,
        }}
        validationSchema={yup.object({
          btc: yup
            .string()
            .required("you are required to input your BTC address"),
          amount: yup.number().moreThan(0, "must input a value greater than 0"),
        })}
        onSubmit={(val) => console.log(val)}
      >
        {({ values, handleSubmit }) => (
          <Box>
            <Box d="flex" alignItems="center">
              <Box mr="20">
                <Text className={classes.labels}>Amount to repay</Text>
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
              {/* <Box>
                <Text className={classes.labels}>BTC uquivalent</Text>
                <Text
                  py="1.5"
                  pl="1.5"
                  borderRadius="5px"
                  border={`1px solid ${colors.ash}`}
                >
                  000.000
                </Text>
              </Box> */}
            </Box>
            <Box mt="5" w="60%">
              <Text className={classes.labels}>Your BTC address</Text>
              <Input
                type="text"
                value={values.btc}
                color={colors.deepBlue}
                name="btc"
              />
            </Box>
            <Box mt="5">
              <Text>CRYPTBLIS account details</Text>
              <Box>
                <Text>Access Bank</Text>
                <Text>Olarenwaju Qudos</Text>
                <Text>0226384647489</Text>
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
                Clicking next implies that you have tranfered the money into
                CRYTBLIS account and you are ready to upload prove of payment
              </Text>
            </Box>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default RepayCash;
