import { Box, Text, Select, CircularProgress } from "@chakra-ui/react";
import React from "react";
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

const useStyles = createUseStyles({
  labels: {
    color: colors.brown,
    fontStyle: "18px",
  },
});

const SellBtc = () => {
  const classes = useStyles();
  const [type, setType] = React.useState("USD");
  const { token, id } = useSelector((state) => state.user);
  const [loading, setLoading] = React.useState(false);

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
      image: "dhfgudfudfdf",
      btc_amount: "0.00453",
      cash_amount: values.amount,
      userId: id,
      type: "Sell BTC",
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
          amount: 0,
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
          image: yup.string(),
        })}
        onSubmit={submit}
      >
        {({ values, handleSubmit, setFieldValue }) => (
          <Box>
            <Box d="flex">
              <Box mr="16">
                <Box d="flex" alignItems="center">
                  <Box mr="20">
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
                        name="account"
                        value={values.account}
                      />
                    </Box>
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
