"use client";
import { SessionProvider } from "next-auth/react";
import {
  ChakraProvider,
  createSystem,
  defaultBaseConfig,
  defaultSystem,
  useFileUpload,
} from "@chakra-ui/react";
import AnimationProvider from "./AnimationProvider";
import { FileUpload } from "@chakra-ui/react";
import React from "react";
import system from "@/theme";

const AllProviders = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const fileUpload = useFileUpload();
  return (
    <SessionProvider>
      <ChakraProvider value={system}>
        <AnimationProvider>
          <FileUpload.RootProvider value={fileUpload}>
            {children}
          </FileUpload.RootProvider>
        </AnimationProvider>
      </ChakraProvider>
    </SessionProvider>
  );
};

export default AllProviders;
