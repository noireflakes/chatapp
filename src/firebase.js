import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_A_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_A_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_A_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_A_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_A_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_A_MEASUREMENT_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
