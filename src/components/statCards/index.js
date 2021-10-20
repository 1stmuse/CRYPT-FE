import React from "react";
import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import "./styles.css";

const useStyles = createUseStyles({
  stat: {
    padding: "8px",
    paddingLeft: "20px",
    // width: "200px",
    // height: "100px",
    flexDirection: "column",
    alignItems: "flex-start !important",
    /* justify-content: space-around !important; */
    marginRight: "10px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
  },
});

const StatCard = ({ text, amount, icon, color }) => {
  const [isMobile] = useMediaQuery(["(max-width: 800px)"]);
  const classes = useStyles();
  return (
    <Box
      className={classes.stat}
      height="100px"
      w={isMobile ? "150px" : "200px"}
      mb="5"
    >
      <Text mb="10%">{text} </Text>
      <Box className="stat-numb">
        <Text fontSize={isMobile && "10px"} color={color}>
          {amount}
        </Text>
        {icon && (
          <Text>
            <img src={icon} alt="icon" />
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default StatCard;
