import { Box, Text } from "@chakra-ui/react";
import React from "react";
import bg from "../assets/bctBg.jpg";
import { Formik } from "formik";
import * as yup from "yup";
import colors from "../utils/colors";
import Button from "../components/Button";
import Input from "../components/Input";
import { createUseStyles } from "react-jss";
import { useDispatch } from "react-redux";

const useStyles = createUseStyles({
  labels: {
    color: colors.brown,
    fontStyle: "18px",
  },
});

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  // const history = useHistory();
  const submit = (values) => {
    dispatch({ type: "LOGIN", payload: "dffygfhgh" });
    history.push("dashboard");
  };
  return (
    <Box
      bgImg={bg}
      minH="100vh"
      pos="relative"
      d="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        position="absolute"
        left="0"
        right="0"
        top="0"
        height="100vh"
        bg="rgba(0,0,0, 0.8)"
      />
      <Box
        minH="320px"
        // border="1px solid white"
        bg="white"
        zIndex="banner"
        px="10"
        py="10"
        borderRadius="10px"
      >
        <Text color={colors.deepBlue} textAlign="center" fontSize="2xl" mb="5">
          Login your account
        </Text>
        <Box>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={submit}
            validationSchema={yup.object({
              email: yup
                .string()
                .email("input a valid email address")
                .required("email is required"),
              password: yup.string().required("password is required"),
            })}
          >
            {({ values, handleSubmit, isSubmitting }) => (
              <Box>
                <Box mb="5">
                  <Text className={classes.labels}>Email</Text>

                  <Input
                    type="text"
                    value={values.email}
                    color={colors.deepBlue}
                    name="email"
                  />
                </Box>
                <Box mb="5">
                  <Text className={classes.labels}>Password</Text>
                  <Input
                    type="password"
                    color={colors.deepBlue}
                    value={values.password}
                    name="password"
                  />
                </Box>
                <Box mb="5">
                  <Button
                    isSubmitting={isSubmitting}
                    onClick={handleSubmit}
                    type="primary"
                    width="100%"
                  >
                    Login
                  </Button>
                </Box>
              </Box>
            )}
          </Formik>
        </Box>
        <Box d="flex">
          <Text color={colors.deepBlue} mr="10px">
            Don't have an account
          </Text>
          <Text
            color={colors.primary}
            cursor="pointer"
            onClick={() => history.push("signup")}
          >
            Sign up
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
