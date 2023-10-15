import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwU6GP0oZTQrxUaMKwgfAZxWEezeXtO4U",
  authDomain: "empo-c8adb.firebaseapp.com",
  projectId: "empo-c8adb",
  storageBucket: "empo-c8adb.appspot.com",
  messagingSenderId: "56040909666",
  appId: "1:56040909666:web:faeeda826c19dec3f79a3b",
  measurementId: "G-L4HTX8TZJ9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
