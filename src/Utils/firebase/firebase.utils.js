// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdE8jW6kLJ39x7QbH9n856t7vOUp-9rUI",
  authDomain: "jastar-e6bdb.firebaseapp.com",
  projectId: "jastar-e6bdb",
  storageBucket: "jastar-e6bdb.appspot.com",
  messagingSenderId: "19621271703",
  appId: "1:19621271703:web:06c25cc540ed6a6db4b1d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
