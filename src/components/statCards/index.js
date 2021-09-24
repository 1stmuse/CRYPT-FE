import React from "react";
import { Box, Text } from "@chakra-ui/react";
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
  const classes = useStyles();
  return (
    <Box className={classes.stat} w="200px">
      <Text mb="10%">{text} </Text>
      <Box className="stat-numb">
        <Text color={color}> {amount} </Text>
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
