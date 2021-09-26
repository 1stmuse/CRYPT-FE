import { Box } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ModalContext } from "./context";

const Modal = () => {
  const state = useContext(ModalContext);

  return (
    <Box
      pos="absolute"
      left="0"
      right="0"
      bottom="0"
      top="0"
      bg="rgba(0,0,0,0.5)"
      w="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {state.show && state.component ? <Box> {state.component} </Box> : null}
    </Box>
  );
};

export default Modal;
