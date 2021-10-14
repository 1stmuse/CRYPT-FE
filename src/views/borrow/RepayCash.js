import { Box, Text, useMediaQuery, CircularProgress } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import Input from "../../components/Input";
import colors from "../../utils/colors";
import { createUseStyles } from "react-jss";
import Button from "../../components/Button";
import { ReactComponent as Delete } from "../../assets/delete-icon.svg";
import { ReactComponent as UploadIcon } from "../../assets/upload.svg";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import ImageUploader from "../../components/ImageUploader";
import moment from "moment";
import axios from "axios";
import io from "socket.io-client";
import Alert from "../../utils/Alert";

const useStyles = createUseStyles({
  labels: {
    color: colors.brown,
    fontStyle: "18px",
  },
  flex: {
    display: "flex",
    alignItems: "center",
    color: "white",
    fontSize: "13px",
  },
});

const RepayCash = () => {
  const classes = useStyles();
  const history = useHistory();
  const [isMobile, smMobile] = useMediaQuery([
    "(max-width: 800px)",
    "(max-width: 400px)",
  ]);
  const { data } = history.location.state;
  const [loading, setLoading] = React.useState(false);
  const [payLoad, setPayload] = useState(false);
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  const [socket, setSocket] = useState(null);

  // console.log(data);
  const upLoad = async (files, fieldValue) => {
    const data = new FormData();
    const file = files[0];
    data.append("file", file);
    data.append("upload_preset", "cryptblis");
    setLoading(true);
    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dehqfoyep/image/upload",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      fieldValue("image", res.data.url);
      setLoading(false);
    } catch (error) {
      Alert("error", error.message);
    }
  };

  const submit = (values, actions) => {
    const payload = {
      image: values.image,
      btc: values.btc,
      userId: id,
      type: "repay loan",
      transactionId: data._id,
    };
    setPayload(true);
    socket.emit("Repay", payload, (err, message) => {
      if (err) {
        Alert("error", message);
      }

      Alert("success", message);
      setPayload(false);
      actions.resetForm();
      history.goBack();
    });
  };

  const socketInit = () => {
    const newSock = io("https://cryptblis.herokuapp.com", {
      query: {
        id: token,
      },
    });

    newSock.on("connected", (message) => {
      console.log(message);
      Alert("success", message);
    });

    newSock.on("repay-success", (message) => {
      console.log(message);
      Alert("success", message);
    });

    newSock.on("disconnection", () => {
      setSocket(null);
      Alert("error", "socket disconnected");
    });

    setSocket(newSock);
  };
  useEffect(() => {
    // console.log("leaked");
    socketInit();
  }, []);

  return (
    <Box mt="5">
      <Box
        bg={colors.deepBlue}
        borderRadius="10"
        pl={smMobile ? "1" : "5"}
        py="3"
        w={isMobile ? "100%" : "80%"}
      >
        <Box>
          <Text color="white" mb="4" fontSize="2xl">
            Loan Details
          </Text>
        </Box>
        <Box>
          <Box className={classes.flex}>
            <Text minW={smMobile ? "110px" : "150px"}>Transaction date:</Text>
            <Text>{moment(data.createdAt).format("D MMM YYYY")}</Text>
          </Box>
          <Box className={classes.flex}>
            <Text minW={smMobile ? "110px" : "150px"}>Transaction ID:</Text>
            <Text> {data._id} </Text>
          </Box>
          <Box className={classes.flex}>
            <Text minW={smMobile ? "110px" : "150px"}>Amount borrowed:</Text>
            <Text> {data.cash_amount} </Text>
          </Box>
          <Box className={classes.flex}>
            <Text minW={smMobile ? "110px" : "150px"}>Deposited BTC:</Text>
            <Text> {data.btc_amount} </Text>
          </Box>
        </Box>
      </Box>
      <Formik
        initialValues={{
          btc: "",
          image: "",
        }}
        validationSchema={yup.object({
          btc: yup
            .string()
            .required("you are required to input your BTC address"),
          image: yup.string().required(),
        })}
        onSubmit={submit}
      >
        {({ values, handleSubmit, setFieldValue }) => (
          <Box>
            <Box d="flex" mt="5" flexDir={isMobile ? "column" : "row"}>
              <Box mr="10">
                <Text className={classes.labels}>Your BTC address</Text>
                <Input
                  type="text"
                  value={values.btc}
                  color={colors.deepBlue}
                  name="btc"
                />
                <Box mt="5">
                  <Text>CRYPTBLIS account details</Text>
                  <Box>
                    <Text>Access Bank</Text>
                    <Text>Olarenwaju Qudos</Text>
                    <Text>0226384647489</Text>
                  </Box>
                </Box>
              </Box>
              <Box mt={isMobile && "5"} width="260px">
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
              <Button
                disabled={values.image === ""}
                onClick={handleSubmit}
                width="100px"
                type="primary"
                isLoading={payLoad}
              >
                SEND
              </Button>
            </Box>
            <Box mt={4} w={isMobile ? "85%" : "50%"}>
              <Text>NOTE:</Text>
              <Text className={classes.labels}>
                Clicking next implies that you have tranfered the money into
                CRYTBLIS account and you are ready to upload prove of payment,
                after which CRYTBLIS will send your deposited BTC to your
                address
              </Text>
            </Box>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default RepayCash;
