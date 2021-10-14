import React from "react";
import {
  Box,
  Input as CInput,
  InputGroup,
  InputRightAddon,
  Text,
  Icon,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useField } from "formik";

const Input = ({ name, type, ...rest }) => {
  const [field, meta] = useField(name);
  const [showPass, setShowPass] = React.useState(false);

  return (
    <Box>
      <InputGroup>
        <CInput
          type={!showPass ? type : "text"}
          {...field}
          {...meta}
          {...rest}
        />
        {name === "password" && (
          <InputRightAddon onClick={() => setShowPass(!showPass)}>
            {showPass ? <ViewIcon /> : <ViewOffIcon />}
          </InputRightAddon>
        )}
      </InputGroup>
      {meta.error && meta.touched ? (
        <Text
          color="#EA2020"
          fontSize="10px"
          fontWeight={400}
          lineHeight="20px"
        >
          {meta?.error}
        </Text>
      ) : null}
    </Box>
  );
};

export default Input;
