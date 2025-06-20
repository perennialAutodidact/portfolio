// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use

import { initializeApp } from "firebase/app";
import {
  getAuth,
  connectAuthEmulator,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const authProvider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);

if (process.env.NODE_ENV === "development") {
  if (!process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_HOST) {
    throw new Error(
      "Missing environment variable: NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_HOST",
    );
  }
  if (!process.env.NEXT_PUBLIC_FIREBASE_FIRESTORE_EMULATOR_HOST) {
    throw new Error(
      "Missing environment variable: NEXT_PUBLIC_FIREBASE_FIRESTORE_EMULATOR_HOST",
    );
  }
  if (!process.env.NEXT_PUBLIC_FIREBASE_STORAGE_EMULATOR_HOST) {
    throw new Error(
      "Missing environment variable: NEXT_PUBLIC_FIREBASE_STORAGE_EMULATOR_HOST",
    );
  }

  connectAuthEmulator(
    auth,
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_HOST,
  );
  connectFirestoreEmulator(
    db,
    process.env.NEXT_PUBLIC_FIREBASE_FIRESTORE_EMULATOR_HOST,
    Number(process.env.NEXT_PUBLIC_FIREBASE_FIRESTORE_EMULATOR_PORT),
  );
  connectStorageEmulator(
    storage,
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_EMULATOR_HOST,
    Number(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_EMULATOR_HOST),
  );
}

export { app, auth, storage, db, authProvider, signInWithPopup };
