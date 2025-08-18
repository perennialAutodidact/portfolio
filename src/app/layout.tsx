import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
      <head title="Keegan Good. Perennial Autodidact. Always Learning.">
        <meta name="viewport" content="width=device-width" />
      </head>
      <body className={inter.className}>
        <AllProviders>{children}</AllProviders>
      </body>
    </html>
  );
}
