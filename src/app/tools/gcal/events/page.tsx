import React from "react";
import DragDropUploader from "@/app/components/DragDropUploader";
import { Box } from "@chakra-ui/react";

const Events: React.FunctionComponent = () => {
  return (
    <Box height="100vh" width="100%" display="flex" justifyContent="center">
      <DragDropUploader />
    </Box>
  );
};

export default Events;
