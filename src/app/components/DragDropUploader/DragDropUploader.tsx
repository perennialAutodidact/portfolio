"use client";
import {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import { Box, Button, Flex, useFileUploadContext } from "@chakra-ui/react";
import { DragEvent, DragEventHandler } from "react";
import {
  FileUploadRoot,
  FileUploadList,
  FileUploadDropzone,
} from "@/app/components/ui/file-upload";
import { useCalendarStore } from "@/app/tools/calendar/store";

const DragDropUploader = () => {
  const { addFile, setStatusMessage, messages, files, reminders } =
    useCalendarStore();
  const fileUploadContext = useFileUploadContext();

  const handleDrop: DragEventHandler<HTMLElement> = (e) => {
    addFile(Array.from(e.dataTransfer.files));
  };

  const uploadFiles = async () => {
    if (!files || !files.length) return;

    const formData = new FormData();
    formData.append("reminders", JSON.stringify(reminders));
    for (const file of files) {
      formData.append("files", file);
    }

    try {
      const response = await fetch("/api/calendar/events/create", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const { message, googleEvent } = await response.json();
        setStatusMessage("success", message);
        fileUploadContext.clearFiles();
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box width={"100%"}>
      <Flex justifyContent="center" alignItems="center">
        <FileUploadRoot maxFiles={5} color={"purple.800"}>
          <FileUploadDropzone
            label="Drop files here to upload to Google Calendar"
            description=".isc files only"
            padding="2rem"
            backgroundColor="purple.100"
            color={"purple.500"}
            onDrop={handleDrop}
            width={"100%"}
          />
          <FileUploadList />
          <Flex gap={16} width="100%">
            {files ? (
              <Button
                paddingX={15}
                colorPalette={"purple"}
                onClick={() => uploadFiles()}
                width={{
                  sm: "100%",
                  lg: "33%",
                }}
              >
                Upload
              </Button>
            ) : null}
            {messages.success || messages.error ? (
              <Box
                width={{
                  sm: "100%",
                  lg: "33%",
                }}
                backgroundColor={messages.success ? "green.200" : "red.200"}
                color={messages.success ? "green.800" : "red.800"}
                p={3}
                borderRadius={8}
              >
                {messages.success ? <Box>{messages.success}</Box> : null}
                {messages.error ? <Box>{messages.error}</Box> : null}
              </Box>
            ) : null}
          </Flex>
        </FileUploadRoot>
      </Flex>
    </Box>
  );
};

export default DragDropUploader;
