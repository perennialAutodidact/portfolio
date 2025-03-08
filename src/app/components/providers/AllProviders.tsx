"use client";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import ChakraUIProvider from "@/app/components/Providers/ChakraUIProvider";
import AnimationProvider from "@/app/components/Providers/AnimationProvider";
import React from "react";

const AllProviders = ({
    children,
}: Readonly<{ children: React.ReactNode }>) => {
    return (
        <ChakraProvider value={defaultSystem}>
            {/* // <ChakraUIProvider> */}
            {/* <AnimationProvider>{children}</AnimationProvider> */}
            {children}
        </ChakraProvider>
        // </ChakraUIProvider>
    );
};

export default AllProviders;
