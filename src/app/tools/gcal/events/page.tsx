import React from "react";
import DragDropUploader from "@/app/components/DragDropUploader";
import { Box } from "@chakra-ui/react";
import { DragEventHandler } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, AuthError } from "firebase/auth";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase'
import { google } from '@googleapis/calendar';
import { useMemo } from "react";
import { useEffect } from "react";
import { setCookie } from "@/app/actions/setCookie";

const Events: React.FunctionComponent = () => {
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/calendar.events');

  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

  const googleUser = useMemo(() => googleUser, [googleUser])
  const loading = useMemo(() => googleLoading, [googleLoading])
  const error = useMemo(() => googleError, [googleError])

  useEffect(() => {
    if(googleUser && !loading && !error){
      // set a cookie with credentials?
    }
  }, [])

  const handleFileDrop: DragEventHandler = (event: DragEvent) => {
    console.log(event);
  };

  return (
    <Box height="100vh" width="100%" display="flex" justifyContent="center">
      <DragDropUploader handleFileDrop={handleFileDrop} />
    </Box>
  );
};



export default Events;
