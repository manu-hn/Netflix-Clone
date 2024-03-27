// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "netflixclone-2bb7c.firebaseapp.com",
  projectId: "netflixclone-2bb7c",
  storageBucket: "netflixclone-2bb7c.appspot.com",
  messagingSenderId: "251231959705",
  appId: "1:251231959705:web:05d1abc7e1d96fd2131608",
  measurementId: "G-N9Y70WQB1K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();