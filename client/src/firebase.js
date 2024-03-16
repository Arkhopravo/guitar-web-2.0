// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "shopping-app-fb85f.firebaseapp.com",
  projectId: "shopping-app-fb85f",
  storageBucket: "shopping-app-fb85f.appspot.com",
  messagingSenderId: "323619032114",
  appId: "1:323619032114:web:ea80e7c2fbd2ea3064c02b",
  measurementId: "G-NBG0D3D17K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
