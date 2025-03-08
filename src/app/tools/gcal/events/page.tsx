'use client'
import React from "react";
import DragDropUploader from "@/app/components/DragDropUploader";
import { Box } from "@chakra-ui/react";

const AddEvent: React.FunctionComponent = () => {
    return (
        <Box height="100vh" width="100%">
            <DragDropUploader />
        </Box>
    );
};

export default AddEvent;
