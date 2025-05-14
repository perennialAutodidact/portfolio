import React from "react";
import DragDropUploader from "@/app/components/DragDropUploader";
import { Box } from "@chakra-ui/react";
import { DragEventHandler } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, AuthError } from "firebase/auth";
import Login from "./Login";

const Events: React.FunctionComponent = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/calendar.events');

    return (
        <Box
            height="100vh"
            width="100%"
            marginTop={24}
            display="flex"
            flexDirection={'column'}
            justifyContent="center"
            alignItems={'center'}
            gap={16}
        >
            <Login />
            <DragDropUploader />
        </Box>
    );
};



export default Events;
