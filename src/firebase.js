// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2_msEEsggQtsjKzYrnOuVKqNsDDwNoHg",
  authDomain: "react-chat-b10be.firebaseapp.com",
  projectId: "react-chat-b10be",
  storageBucket: "react-chat-b10be.appspot.com",
  messagingSenderId: "227633984598",
  appId: "1:227633984598:web:0b28e93e67081c231737f7",
  measurementId: "G-5Y1BP1E67R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);