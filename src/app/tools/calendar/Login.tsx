"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { SiGooglecalendar } from "react-icons/si";
import { Box, Button, Container, Text, Heading } from "@chakra-ui/react";

const Login = () => {
  const handleClick = async () => {
    signIn("google", { redirectTo: "/tools/calendar" });
  };

  return (
    <Container display={"flex"} justifyContent={"center"}>
      <Box>
        <Button
          padding={15}
          colorPalette={"teal"}
          color={"whiteAlpha.900"}
          fontSize={16}
          fontWeight={"bold"}
          onClick={handleClick}
        >
          <SiGooglecalendar />
          Sign In
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
