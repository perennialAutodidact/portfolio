"use client";
import { SessionProvider } from "next-auth/react";
import AnimationProvider from "./AnimationProvider";
import React from "react";

const AllProviders = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <SessionProvider>
      <AnimationProvider>{children}</AnimationProvider>
    </SessionProvider>
  );
};

export default AllProviders;
