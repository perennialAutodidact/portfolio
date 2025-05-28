'use client'

import React, { useState } from 'react'
import {
  GoogleAuthProvider,
  signInWithPopup,
  User,
  UserCredential,
} from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth, authProvider } from '@/app/firebase'
import { SiGooglecalendar } from "react-icons/si";
import { Box, Button, Container, Text, Heading } from '@chakra-ui/react';
import { google } from 'googleapis';

const Login = () => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const fetchTokens = async () => {
    setLoading(true);
    setError(null);
    try {
      const { user } = await signInWithPopup(auth, authProvider);
      const idToken = await user.getIdToken();
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
      })
      const { url } = await response.json();
      router.push(url);
    } catch (error: any) {
      //     setError(error);
      console.error(error)
      // } finally {
      //     setLoading(false);
    }
  };

  const handleClick = async () => {
    // fetchTokens();
  };

  return (
    <Container display={'flex'} justifyContent={'center'}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <Box>
          {user ? (
            <Heading as='h3'>Logged in as: {user.email}</Heading>
          ) : (
            <Button
              padding={15}
              colorPalette={'teal'}
              color={'whiteAlpha.900'}
              fontSize={16}
              fontWeight={'bold'}
              onClick={handleClick}
            >
              <SiGooglecalendar /><Text>Login with Google</Text>
            </Button>
          )}
        </Box>
      )}
    </Container>
  )
}

export default Login
