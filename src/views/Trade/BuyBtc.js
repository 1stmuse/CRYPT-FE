import { Box, Text, Select, CircularProgress } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import Input from "../../components/Input";
import colors from "../../utils/colors";
import { createUseStyles } from "react-jss";
import { ReactComponent as Delete } from "../../assets/delete-icon.svg";
import { ReactComponent as UploadIcon } from "../../assets/upload.svg";
import Button from "../../components/Button";
import * as yup from "yup";
import ImageUploader from "../../components/ImageUploader";
import axios from "axios";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

const useStyles = createUseStyles({
  labels: {
    color: colors.brown,
    fontStyle: "18px",
  },
});

const BuyBtc = () => {
  const classes = useStyles();
  const [type, setType] = React.useState("USD");
  const { token, id } = useSelector((state) => state.user);
  const [loading, setLoading] = React.useState(false);

  const [socket, setSocket] = useState(null);

  const socketInit = () => {
    const newSock = io("http://localhost:8000", {
      query: {
        id: token,
      },
    });

    newSock.on("connected", (message) => {
      console.log(message);
      alert("success", "connected");
    });

    newSock.on("disconnection", () => {
      setSocket(null);
      alert("error", "socket disconnected");
    });

    setSocket(newSock);
  };
  useEffect(() => {
    socketInit();
  }, [token]);

  const upLoad = async (files, fieldValue) => {
    const data = new FormData();
    const file = files[0];
    data.append("file", file);
    data.append("upload_preset", "muse_img");
    setLoading(true);
    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/muse1/image/upload",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      fieldValue("image", res.data.url);
      setLoading(false);
    } catch (error) {
      console.log("erro");
    }
  };

  const submit = (values, actions) => {
    const payload = {
      image: values.image,
      btc_amount: values.btc,
      cash_amount: values.amount,
      userId: id,
      type: "Buy BTC",
      currency: type,
    };

    fetch("http://localhost:8000/api/transactions", {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        socket.emit("create-transaction", payload);
        console.log(data);
        actions.resetForm();
      })
      .catch((err) => {
        console.log(err);
        actions.resetForm();
      });
  };

  return (
    <Box mt="5">
      <Formik
        initialValues={{
          btc: "",
          amount: 0,
          image: "",
        }}
        validationSchema={yup.object({
          btc: yup
            .string()
            .required("you are required to input your BTC address"),
          amount: yup.number().moreThan(0, "must input a value greater than 0"),
          image: yup.string(),
        })}
        onSubmit={submit}
      >
        {({ values, handleSubmit, setFieldValue }) => (
          <Box>
            <Box d="flex">
              <Box mr="16">
                <Box mr="5">
                  <Text className={classes.labels}>cash value</Text>
                  <Box d="flex">
                    <Select
                      mr="5px"
                      w="100px"
                      // placeholder="Select transaction type"
                      onChange={(val) => setType(val.currentTarget.value)}
                      defaultValue={type}
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
                <Box mt="1.5">
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
              </Box>
              <Box>
                <Text>Upload prove of payment</Text>
                {values.image === "" ? (
                  <ImageUploader
                    onUpload={(files) => upLoad(files, setFieldValue)}
                    accept={[".png", ".jpg", ".jpeg"]}
                    maxFiles={1}
                    maxSize={5242880}
                  >
                    <Box
                      background="#F6F3F2"
                      borderRadius="8px"
                      position="relative"
                      textAlign="center"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      mb="5px"
                      padding="15px 15px"
                      width="250px"
                      height="250px"
                    >
                      {loading ? (
                        <Box>
                          <CircularProgress isIndeterminate />
                        </Box>
                      ) : (
                        <Box>
                          <Text fontSize="16px" color="#231F20">
                            Drop a file here to upload
                          </Text>
                          <Button
                            display={
                              values.image === "" ? "inline-flex" : "none"
                            }
                            alignItems="center"
                            justifyContent="center"
                            btnType="default"
                            marginTop="13px"
                            fontWeight={400}
                            height="44px"
                          >
                            <UploadIcon style={{ paddingRight: "5px" }} />
                            Upload
                          </Button>
                        </Box>
                      )}
                    </Box>
                  </ImageUploader>
                ) : (
                  <Box
                    mb="5px"
                    borderRadius="10px"
                    width="250px"
                    height="250px"
                    bgImage={`url(${values?.image})`}
                    bgSize="100% 100%"
                  >
                    <Box
                      mt="5px"
                      zIndex="40"
                      mr="5px"
                      display="flex"
                      height="30px"
                      justifyContent="flex-end"
                    >
                      <Box
                        bg="white"
                        d="flex"
                        alignItems="center"
                        justifyContent="center"
                        p="2"
                        borderRadius="5px"
                        // ml="2"
                      >
                        <Delete
                          cursor="pointer"
                          onClick={() => setFieldValue("image", "")}
                        />
                      </Box>
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
            <Box mt="5">
              <Button onClick={handleSubmit} width="100px" type="primary">
                Next
              </Button>
            </Box>
            <Box mt={4} w="50%">
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

export default BuyBtc;
