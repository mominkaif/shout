// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyPAa7-HC7dYvOPYr2Rnz9P9rwQV-1-Ao",
  authDomain: "shout-a47d5.firebaseapp.com",
  projectId: "shout-a47d5",
  storageBucket: "shout-a47d5.appspot.com",
  messagingSenderId: "539599369423",
  appId: "1:539599369423:web:15b5a6be6c0585853433ba",
  measurementId: "G-W2HEW15RX3",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
