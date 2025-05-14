"use client";

import { Box, Flex } from "@chakra-ui/react";
import { DragEvent, DragEventHandler } from "react";
import {
    FileUploadRoot,
    FileUploadList,
    FileUploadDropzone,
} from "@/app/components/ui/file-upload";

const DragDropUploader = () => {

    const handleFileDrop: DragEventHandler = (event: DragEvent) => {
        console.log(event);
    };

    return (
        <section onDrop={handleFileDrop}>
            <Box height="100vh" width="100%">
                <Flex justifyContent="center" alignItems="center">
                    <FileUploadRoot>
                        <FileUploadDropzone
                            label="Drop files here to upload to Google Calendar"
                            description=".isc files only"
                            padding="2rem"
                            colorPalette={'purple'}
                        />
                        <FileUploadList />
                    </FileUploadRoot>
                </Flex>
            </Box>
        </section>
    );
};

export default DragDropUploader;
