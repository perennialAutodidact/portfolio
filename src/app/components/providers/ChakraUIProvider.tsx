"use client";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

const ChakraUIProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>;
};

export default ChakraUIProvider;
