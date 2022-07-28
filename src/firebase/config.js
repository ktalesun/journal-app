// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7wNkcyIMoJjUoDNgieflv4iStx6uRXwY",
  authDomain: "react-cursos-154fb.firebaseapp.com",
  projectId: "react-cursos-154fb",
  storageBucket: "react-cursos-154fb.appspot.com",
  messagingSenderId: "918768852213",
  appId: "1:918768852213:web:3b58e44304c0357c2239bc",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
