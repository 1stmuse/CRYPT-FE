import React from "react";
import {
  Box,
  Input as CInput,
  InputGroup,
  InputRightAddon,
  Text,
  Icon,
} from "@chakra-ui/react";
import { useField } from "formik";

const Input = ({ name, ...rest }) => {
  const [field, meta] = useField(name);

  return (
    <Box>
      <InputGroup>
        <CInput {...rest} {...field} {...meta} />
        {name === "password" && (
          <InputRightAddon>
            <Icon name="password" />
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
