import { Box, Text, Image, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import { Formik } from "formik";
import logo from "../assets/crylogo.png";
import colors from "../utils/colors";
import Button from "./Button";
import Input from "./Input";
import Alert from "../utils/Alert";

const TwoFactor = ({ history }) => {
  const [isMobile] = useMediaQuery(["(max-width: 850px)"]);
  const [enable, setEnable] = useState(false);
  const token = localStorage.getItem("token");

  // console.log(token);

  const getOtp = () => {
    console.log("clicked");
    fetch("https://cryptwavi.herokuapp.com/api/user/otp", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((data) => data.json())
      .then((res) => {
        if (!res.error) {
          setEnable(true);
        } else {
          Alert("error", res.message);
        }
      })
      .catch((err) => {
        Alert("error", err.message);
      });
  };

  const resendOtp = () => {
    fetch("https://cryptwavi.herokuapp.com/api/user/otp", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((data) => data.json())
      .then((res) => {
        if (!res.error) {
          Alert("success", "An OTP code has been sent to your email");
          // setEnable(true);
        }
      })
      .catch((err) => {
        console.log("err");
        Alert("error", err.message);
      });
  };

  const confirmOtp = (values, actions) => {
    console.log(values);
    fetch("https://cryptwavi.herokuapp.com/api/user/verify_otp", {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(values),
    })
      .then((data) => data.json())
      .then((res) => {
        if (!res.error) {
          history.push("dashboard");
          // Alert("success", "An OTP code has been sent to your email");
          // setEnable(true);
        } else {
          Alert("error", res.message);
          actions.resetForm();
        }
      })
      .catch((err) => {
        Alert("error", err.message);
      });
  };

  return (
    <Box
      d="flex"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      bg="white"
      pr="10"
    >
      <Box w="40%">
        <Image src={logo} />
      </Box>
      <Box w="60%">
        {enable === true ? (
          <Box>
            <Text>Input the 5 digits code sent to your email here</Text>
            <Box>
              <Formik
                initialValues={{
                  otp: "",
                }}
                onSubmit={confirmOtp}
              >
                {({ values, isSubmitting, handleSubmit }) => (
                  <Box>
                    <Input
                      maxW="300px"
                      name="otp"
                      type="number"
                      my="10"
                      value={values.otp}
                    />
                    <Box>
                      <Box mb="3">
                        <Button
                          minW="300px"
                          bg={colors.deepBlue}
                          color="white"
                          type="primary"
                          onClick={handleSubmit}
                          isLoading={isSubmitting}
                        >
                          Confirm
                        </Button>
                      </Box>
                      <Box>
                        <Button
                          bg="white"
                          color={colors.deepBlue}
                          border={`1px solid ${colors.deepBlue}`}
                          minW="300px"
                          onClick={resendOtp}
                          //   type="primary"
                        >
                          Resend
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                )}
              </Formik>
            </Box>
          </Box>
        ) : (
          <Box>
            <Text>
              To make your Transactions on CRYPT WAVI more secured you are
              advised to set up Two Factor Authentication, before you begin to
              perform financial transactions on the platform
            </Text>
            <Box mt="10">
              <Box mb="5">
                <Button
                  minW="300px"
                  bg={colors.deepBlue}
                  color="white"
                  type="primary"
                  onClick={getOtp}
                >
                  Enable Two Factor Authentication
                </Button>
              </Box>
              <Box>
                <Button
                  bg="white"
                  color={colors.deepBlue}
                  border={`1px solid ${colors.deepBlue}`}
                  minW="300px"
                  //   type="primary"
                >
                  Remind me later
                </Button>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default TwoFactor;
