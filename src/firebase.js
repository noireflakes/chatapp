import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvDMHIWybL4z4Ae81xZ-htLndmLeSSwJ8",
  authDomain: "test-135b0.firebaseapp.com",
  projectId: "test-135b0",
  storageBucket: "test-135b0.firebasestorage.app",
  messagingSenderId: "51634917778",
  appId: "1:51634917778:web:7836fdcd90b843bb34314b",
  measurementId: "G-H1Y1N3CVFR",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
