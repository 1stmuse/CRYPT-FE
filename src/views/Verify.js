import { Box, Text, CircularProgress, Image } from "@chakra-ui/react";
import React from "react";
import colors from "../utils/colors";
import logo from "./../assets/crylogo.png";
import Button from "../components/Button";

const Verify = ({ history }) => {
  const [loading, setLoading] = React.useState(true);
  const [message, setMessage] = React.useState("");
  const email = history.location.pathname.split("/")[2];

  const verifyEmail = () => {
    setLoading(true);
    fetch("http://localhost:8000/api/user/verify", {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ email }),
    })
      .then((data) => data.json())
      .then((res) => {
        if (!res.error) {
          setLoading(false);
          setMessage(res.message);
        } else {
          setLoading(false);
          setMessage(res.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        setMessage(err.message || "Email not verified");
      });
  };

  React.useEffect(() => {
    // verifyEmail();
    setTimeout(() => verifyEmail(), 2000);
  }, []);

  return (
    <Box>
      <Box d="flex" ml="5" alignItems="center" my="5" textAlign="center">
        <Image src={logo} w="70px" h="40%" />
        <Text fontSize="4xl">CRYPT WAVI</Text>
      </Box>

      <Box mt="3" textAlign="center">
        <Text mb="10" fontSize="2xl">
          {loading ? "Verifying Email..." : message}
        </Text>
        {loading && <CircularProgress size="20vh" />}
      </Box>

      <Box textAlign="center">
        {!loading && (
          <Button
            type="primary"
            bg={colors.deepBlue}
            onClick={() => history.push("/login")}
          >
            Go to Login
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Verify;
