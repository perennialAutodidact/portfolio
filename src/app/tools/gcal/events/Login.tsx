'use client'

import React, { useState } from 'react'
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { auth } from '@/app/firebase'
import { SiGooglecalendar } from "react-icons/si";
import { Box, Button, Container, Text, Heading } from '@chakra-ui/react';

const Login = () => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchTokens = async () => {
        setLoading(true);
        setError(null);
        try {

            const provider = new GoogleAuthProvider();
            provider.addScope('https://www.googleapis.com/auth/calendar.events');
            provider.setCustomParameters({
                prompt: 'select_account',
            })
            const result = await signInWithPopup(auth, provider)
            const accessToken = GoogleAuthProvider.credentialFromResult(result)?.accessToken;
            const idToken = await result.user.getIdToken();
            const refreshToken = result.user.refreshToken;

            setUser(result.user)

            await fetch('/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${idToken}`
                },
                body: JSON.stringify({ accessToken, refreshToken }),
                credentials: 'include',
            })

        } catch (error: any) {
            setError(error);

        } finally {
            setLoading(false);
        }
    };

    const handleClick = async () => {
        fetchTokens();
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
