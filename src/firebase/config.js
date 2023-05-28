// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgA1QVl2qcbNusT9bZGJrgEP9z4Hw6p6U",
  authDomain: "react-curso-ef29d.firebaseapp.com",
  projectId: "react-curso-ef29d",
  storageBucket: "react-curso-ef29d.appspot.com",
  messagingSenderId: "672951298597",
  appId: "1:672951298597:web:4c7f169b9e72a14d4d2dcc"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp); //Authentication
export const FirebaseBD = getFirestore( FirebaseApp); // BD configuration