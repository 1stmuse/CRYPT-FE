import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import bg from "../assets/bctBg.jpg";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import colors from "../utils/colors";
import Button from "../components/Button";
import Input from "../components/Input";
import { createUseStyles } from "react-jss";
import Alert from "../utils/Alert";

const useStyles = createUseStyles({
  labels: {
    color: colors.brown,
    fontStyle: "18px",
  },
});

const Register = () => {
  const [isMobile] = useMediaQuery(["(max-width: 850px)"]);
  const classes = useStyles();
  const history = useHistory();
  const [error, setError] = React.useState("");
  const submit = (values, actions) => {
    if (values.password !== values.confirm_password) {
      setError("password do not match");
      setTimeout(() => setError(""), 1000);
      return;
    }

    const payload = {
      firstname: values.firstname,
      lastname: values.lastname,
      password: values.password,
      email: values.email,
    };
    // console.log(payload);
    fetch("https://cryptwavi.herokuapp.com/api/user/register", {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then((data) => data.json())
      .then((res) => {
        if (!res.error) {
          console.log(res);
          actions.resetForm();
          history.push("login");

          // dispatch({ type: "LOGIN", payload: "dffygfhgh" });
          // history.push("dashboard");
        } else {
          setError(res.message);
          setTimeout(() => setError(""), 1000);
        }
      })
      .catch((err) => {
        Alert("error", err.message);
        actions.resetForm();
      });
  };
  return (
    <Box
      bgImg={bg}
      minH="100vh"
      pos="relative"
      d="flex"
      justifyContent="center"
      pos="fixed"
      right="0"
      left="0"
      top="0"
      bottom="0"
      overflow="scroll"
      alignItems="center"
      px={isMobile && "5"}
    >
      <Box
        position="absolute"
        left="0"
        right="0"
        top="0"
        bottom="0"
        minH="150vh"
        bg="rgba(0,0,0, 0.8)"
      />
      <Box
        minH="620px"
        mt="10%"
        // border="1px solid white"
        bg="white"
        zIndex="banner"
        px="10"
        py="10"
        borderRadius="10px"
      >
        <Text color={colors.deepBlue} textAlign="center" fontSize="2xl" mb="5">
          Create an account
        </Text>
        <Box>
          <Formik
            initialValues={{
              email: "",
              password: "",
              firstname: "",
              lastname: "",
              confirm_password: "",
            }}
            onSubmit={submit}
            validationSchema={yup.object({
              email: yup.string().email("input a valid email address"),
              password: yup.string().required("password is required"),
              firstname: yup.string().required("first name cannot be empty"),
              lastname: yup.string(),
              confirm_password: yup
                .string()
                .required("please confirm your password"),
            })}
          >
            {({ values, handleSubmit, isSubmitting }) => (
              <Box>
                {error && (
                  <Text color="red" mb="1.5">
                    {error}
                  </Text>
                )}
                <Box mb="5">
                  <Text className={classes.labels}>First name</Text>

                  <Input
                    type="text"
                    value={values.firstname}
                    color={colors.deepBlue}
                    name="firstname"
                  />
                </Box>
                <Box mb="5">
                  <Text className={classes.labels}>Last name</Text>

                  <Input
                    type="text"
                    value={values.lastname}
                    color={colors.deepBlue}
                    name="lastname"
                  />
                </Box>
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
                  <Text className={classes.labels}>Confirm password</Text>
                  <Input
                    type="password"
                    color={colors.deepBlue}
                    value={values.confirm_password}
                    name="confirm_password"
                  />
                </Box>
                <Box mb="5">
                  <Button
                    onClick={handleSubmit}
                    isLoading={isSubmitting}
                    type="primary"
                    width="100%"
                  >
                    Create Account
                  </Button>
                </Box>
              </Box>
            )}
          </Formik>
        </Box>
        <Box d="flex">
          <Text color={colors.brown} mr="10px">
            Already have an account
          </Text>
          <Text
            color={colors.deepBlue}
            cursor="pointer"
            onClick={() => history.push("login")}
          >
            login
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
