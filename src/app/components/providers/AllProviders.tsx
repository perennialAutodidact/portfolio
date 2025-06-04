"use client";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import AnimationProvider from "./AnimationProvider";
import React from "react";

const AllProviders = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <AnimationProvider>{children}</AnimationProvider>
    </ChakraProvider>
  );
};

export default AllProviders;
