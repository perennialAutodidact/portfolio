"use client";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import AnimationProvider from "./AnimationProvider";
import React from "react";

const AllProviders = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <SessionProvider>
      <ChakraProvider value={defaultSystem}>
        <AnimationProvider>{children}</AnimationProvider>
      </ChakraProvider>
    </SessionProvider>
  );
};

export default AllProviders;
