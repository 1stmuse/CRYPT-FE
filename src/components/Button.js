import { Box, Text, Button as CButton } from "@chakra-ui/react";
import React from "react";
import colors from "../utils/colors";

const Button = ({ clasname, children, type, ...rest }) => {
  let style = {};
  switch (type) {
    case "primary":
      style = {
        background: colors.deepBlue,
        color: "#fff",
        borderRadius: "8px",
        _hover: { background: "blueviolet" },
      };
      break;
    case "secondary":
      style = {
        background: colors.secondary,
        color: colors.white,
        _hover: { background: "#1E2D2F" },
      };
      break;
    default:
      break;
  }

  return (
    <CButton className={clasname} color="white" {...style} {...rest}>
      {children}
    </CButton>
  );
};

export default Button;
