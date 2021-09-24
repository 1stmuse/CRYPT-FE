import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Dropzone from "react-dropzone";

const ImageUploader = ({ containerStyle, onUpload, ...props }) => {
  return (
    <Dropzone onDrop={(files) => onUpload?.(files)} {...props}>
      {({ getRootProps, getInputProps }) => (
        <Box {...getRootProps()} {...containerStyle}>
          <input {...getInputProps()} />
          {props.children}
        </Box>
      )}
    </Dropzone>
  );
};

export default ImageUploader;
