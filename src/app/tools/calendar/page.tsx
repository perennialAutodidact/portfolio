import React from "react";
import DragDropUploader from "@/app/components/DragDropUploader";
import { Box } from "@chakra-ui/react";
import Login from "./Login";

const Events: React.FunctionComponent = () => {
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
