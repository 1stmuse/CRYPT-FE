import { Box, Text, Image, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import shield from "../../assets/shield.png";
import colors from "../../utils/colors";
import { createUseStyles } from "react-jss";
import { ReactComponent as Mil } from "../../assets/mil.svg";
import { ReactComponent as Third } from "../../assets/third.svg";
import { ReactComponent as Iso } from "../../assets/iso.svg";
import { ReactComponent as Ins } from "../../assets/insurance.svg";

const useStyles = createUseStyles({
  box: {
    width: "200px",
    marginBottom: "20px",
    fontSize: "14px",
    marginRight: "10px",
    flexGrow: 1,
  },
});

const Assets = () => {
  const [isMobile] = useMediaQuery(["(max-width: 850px)"]);
  const classes = useStyles();
  return (
    <Box minH="50vh" bg="#c9d4f6" py={5} px={5}>
      <Box
        d="flex"
        flexDir={isMobile && "column"}
        alignItems="center"
        justifyContent="center"
        borderBottom={`1px solid ${colors.brown}`}
      >
        <Box w={isMobile ? "100%" : "50%"}>
          <Image src={shield} />
        </Box>
        <Box w={isMobile ? "100%" : "50%"}>
          <Box w={isMobile ? "100%" : "70%"}>
            <Text fontSize={isMobile ? "3xl" : "4xl"} color={colors.deepBlue}>
              The Ultimate Security for Your Digital Assets
            </Text>
            <Text mt="10" fontSize="18px" mb="5">
              The Crypt wavi platform is equipped with a top-quality security
              infrastructure designed to ensure maximum protection of assets at
              all times.
            </Text>
          </Box>
        </Box>
      </Box>
      <Box mt="5" d="flex" flexWrap="wrap">
        <Box className={classes.box}>
          <Box d={isMobile && "flex"} alignItems="flex-end">
            <Mil />
            <Text fontSize="16px" ml={isMobile && "4"}>
              Military-grade Security
            </Text>
          </Box>

          <Text color={colors.brown}>
            Storage held in military-grade Class III vaults
          </Text>
        </Box>
        <Box className={classes.box}>
          <Box d={isMobile && "flex"} alignItems="flex-end">
            <Third />
            <Text fontSize="16px" ml={isMobile && "4"}>
              Third-party Audits
            </Text>
          </Box>

          <Text color={colors.brown}>
            Independent, real-time reserves attestation by Armanino
          </Text>
        </Box>
        <Box className={classes.box}>
          <Box d={isMobile && "flex"} alignItems="flex-end">
            <Iso />
            <Text fontSize="16px" ml={isMobile && "4"}>
              ISO 27001:2013 Compliant
            </Text>
          </Box>

          <Text color={colors.brown}>
            Impeccable risk assessment, data protection, and enhanced
            cybersecurity
          </Text>
        </Box>
        <Box className={classes.box}>
          <Box d={isMobile && "flex"} alignItems="flex-end">
            <Ins />
            <Text fontSize="16px" ml={isMobile && "4"}>
              $375 Million Insurance
            </Text>
          </Box>

          <Text color={colors.brown}>Insurance on custodial assets</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Assets;
