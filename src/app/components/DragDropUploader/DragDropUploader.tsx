"use client";
import {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { DragEvent, DragEventHandler } from "react";
import {
  FileUploadRoot,
  FileUploadList,
  FileUploadDropzone,
} from "@/app/components/ui/file-upload";
import { useCalendarStore } from "@/app/tools/calendar/store";

const DragDropUploader = () => {
  const [files, setFiles] = useState<File[]>([]);
  const { reminders } = useCalendarStore();

  const handleDrop: DragEventHandler<HTMLElement> = (e) => {
    setFiles(files.concat(Array.from(e.dataTransfer.files)));
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box height="100vh" width={"100%"}>
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
          {files ? (
            <Button
              paddingX={15}
              colorPalette={"teal"}
              onClick={() => uploadFiles()}
            >
              Upload
            </Button>
          ) : null}
        </FileUploadRoot>
      </Flex>
    </Box>
  );
};

export default DragDropUploader;
