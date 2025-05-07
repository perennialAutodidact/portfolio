import React from "react";
import type { Metadata } from "next";
import { initializeApp } from "firebase/app";
import { Inter } from "next/font/google";
import { getAuth } from "firebase/auth";
import AllProviders from "@/app/components/providers/AllProviders";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keegan Good - Software engineer & perennial autodidact",
  description: "Hi, I'm Keegan. I'm here to help you realize your visions.",
  creator: "Keegan Good",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head title="Keegan Good. Perennial Autodidact. Always Learning." />
      <body className={inter.className}>
        <AllProviders>{children}</AllProviders>
      </body>
    </html>
  );
}
