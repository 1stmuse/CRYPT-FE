import {
  Box,
  Text,
  Select,
  CircularProgress,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Formik } from "formik";
import Input from "../../components/Input";
import colors from "../../utils/colors";
import { createUseStyles } from "react-jss";
import Button from "../../components/Button";
import { ReactComponent as Delete } from "../../assets/delete-icon.svg";
import { ReactComponent as UploadIcon } from "../../assets/upload.svg";
import ImageUploader from "../../components/ImageUploader";
import { useSelector } from "react-redux";
import * as yup from "yup";
import axios from "axios";
import { useDebouncedCallback } from "use-debounce";
import Alert from "../../utils/Alert";

const useStyles = createUseStyles({
  labels: {
    color: colors.brown,
    fontStyle: "18px",
  },
});

const SellBtc = ({ socket, adminInfo }) => {
  // console.log(socket);
  const [isMobile] = useMediaQuery(["(max-width: 800px)"]);
  const classes = useStyles();
  const [type, setType] = React.useState("USD");
  const [coinType, setCoinType] = React.useState("bitcoin");
  const [value, setValue] = React.useState("");
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  const [loading, setLoading] = React.useState(false);
  const [btcValue, setBtcValue] = useState(0);

  const debounce = useDebouncedCallback((value) => {
    const val = parseInt(value);
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinType}&vs_currencies=USD
    `)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        // console.log(data.bitcoin.usd);
        setBtcValue(val / data[`${coinType}`].usd);
      })
      .catch((err) => {
        console.log(err, "erro from coinbase");
        Alert("error", "check your internet settings");
      });
    // console.log(value);
  }, 1000);

  const chosenAddress = () => {
    let add = "";

    switch (coinType) {
      case "bitcoin":
        add = "btc_address";
        break;
      case "ethereum":
        add = "ethereum_address";
        break;
      case "dogecoin":
        add = "dogecoin_address";
        break;
      case "litecoin":
        add = "litecoin_address";
        break;
      default:
        add = "btc_address";
        break;
    }
    return add;
  };

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

  const getCoinPrice = () => {
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinType}&vs_currencies=USD
    `)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        // console.log(data.bitcoin.usd);
        setBtcValue(parseInt(value) / data[`${coinType}`].usd);
      })
      .catch((err) => {
        console.log(err, "erro from coinbase");
        Alert("error", "check your internet settings");
      });
  };

  // console.log(value);

  React.useEffect(() => {
    if (value === "") return;
    getCoinPrice();
  }, [coinType]);

  const submit = (values, actions) => {
    const payload = {
      image: values.image,
      btc_amount: btcValue,
      cash_amount: values.amount,
      userId: id,
      type: `Sell ${coinType}`,
      currency: type,
    };

    fetch("https://cryptwavi.herokuapp.com/api/transactions", {
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
          socket.emit("Sell-crypto", {
            ...payload,
            account_name: values.bank,
            account_number: values.account,
            crypto_type: coinType.toUpperCase(),
          });
        }
        Alert("success", "Transaction initiated");
        setBtcValue(0);
        actions.resetForm();
      })
      .catch((err) => {
        Alert("error", err.message);
        setBtcValue(0);
        actions.resetForm();
      });
  };

  return (
    <Box mt="5">
      <Formik
        initialValues={{
          amount: "",
          bank: "",
          account: "",
          image: "",
        }}
        validationSchema={yup.object({
          amount: yup.number().moreThan(0, "must input a value greater than 0"),
          bank: yup.string().required("bank field cannot be left blank"),
          account: yup
            .string()
            .required("account number field cannot be left blanck"),
          image: yup.string().required(),
        })}
        onSubmit={submit}
      >
        {({ values, handleSubmit, setFieldValue }) => (
          <Box>
            <Box d="flex" flexDir={isMobile ? "column" : "row"}>
              <Box mr={!isMobile && "16"}>
                <Box mb="4" width="150px">
                  <Select
                    // placeholder="Select transaction type"
                    onChange={(val) => {
                      setCoinType(val.currentTarget.value);
                      // setFieldValue("amount", "");
                    }}
                    defaultValue={coinType}
                  >
                    <option value="bitcoin">Bitcoin</option>
                    <option value="ethereum">Ethereum</option>
                    <option value="dogecoin">Dodgecoin</option>
                    <option value="litecoin">Litecoin</option>
                  </Select>
                </Box>
                <Box>
                  <Box>
                    <Text className={classes.labels}>cash value</Text>
                    <Box d="flex">
                      <Select
                        mr="5px"
                        w={isMobile ? "150px" : "100px"}
                        // placeholder="Select transaction type"
                        onChange={(val) => {
                          setType(val.currentTarget.value);
                          setFieldValue("amount", "");
                        }}
                        defaultValue={type}
                      >
                        <option value="USD">USD</option>
                        <option value="NGN">NGN</option>
                      </Select>
                      <Box flexGrow="1">
                        <Input
                          type="text"
                          value={values.amount}
                          color={colors.deepBlue}
                          name="amount"
                          onChange={(e) => {
                            setFieldValue("amount", e.target.value);
                            setValue(e.target.value);
                            debounce(e.target.value);
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Box mt="1.5">
                    <Text className={classes.labels}>Crypto equivalent</Text>
                    <Text
                      py="1.5"
                      pl="1.5"
                      borderRadius="5px"
                      border={`1px solid ${colors.ash}`}
                    >
                      {btcValue}
                    </Text>
                  </Box>
                </Box>
                <Box mt="5" w="60%">
                  <Text className={classes.labels}>
                    CRYPTWAVILOAN {coinType} address
                  </Text>
                  <Text className={classes.labels}>
                    {adminInfo[chosenAddress()]}
                  </Text>
                </Box>
                <Box mt="5">
                  <Text className={classes.labels}>Your account details</Text>
                  <Box>
                    <Box d="flex" alignItems="center">
                      <Text minW="150px" className={classes.labels}>
                        Bank
                      </Text>
                      <Box flexGrow="1">
                        <Input
                          type="text"
                          color={colors.deepBlue}
                          name="bank"
                          value={values.bank}
                        />
                      </Box>
                    </Box>
                    <Box d="flex" alignItems="center" mt="3">
                      <Text minW="150px" className={classes.labels}>
                        Account Number
                      </Text>
                      <Box flexGrow="1">
                        <Input
                          type="text"
                          color={colors.deepBlue}
                          name="account"
                          value={values.account}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box mt={isMobile && "5"} w="260px">
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
              >
                SEND
              </Button>
            </Box>
            <Box mt={4} w={isMobile ? "85%" : "50%"}>
              <Text>NOTE:</Text>
              <Text className={classes.labels}>
                Clicking next implies that you have tranfered the stated CRYPTO
                ammount into CRYPTWAVILOAN CRYPTO address and you are ready to
                upload prove of transfer
              </Text>
            </Box>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default SellBtc;
