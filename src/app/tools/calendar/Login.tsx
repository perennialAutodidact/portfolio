"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  User,
  UserCredential,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth, authProvider } from "@/app/firebase";
import { SiGooglecalendar } from "react-icons/si";
import { Box, Button, Container, Text, Heading } from "@chakra-ui/react";

const Login = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleClick = async () => {
    console.log("CLICKED");
    signIn("google", { redirectTo: "/tools/calendar" });
  };

  return (
    <Container display={"flex"} justifyContent={"center"}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <Box>
          {user ? (
            <Heading as="h3">Logged in as: {user.email}</Heading>
          ) : (
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
          )}
        </Box>
      )}
    </Container>
  );
};

export default Login;
