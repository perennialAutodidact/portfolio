import React from "react";
import type { Metadata } from "next";
import { initializeApp } from "firebase/app";
import { Inter } from "next/font/google";
import AllProviders from "@/app/components/providers/AllProviders";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
} = process.env;
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

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
