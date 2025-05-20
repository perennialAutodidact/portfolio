'use client'

import React, { useState } from 'react'
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { auth, authProvider } from '@/app/firebase'
import { SiGooglecalendar } from "react-icons/si";
import { Box, Button, Container, Text, Heading } from '@chakra-ui/react';
import { google } from 'googleapis';

const Login = () => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchTokens = async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await signInWithPopup(auth, authProvider);
            console.log({result})

        } catch (error: any) {
            //     setError(error);

            // } finally {
            //     setLoading(false);
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
