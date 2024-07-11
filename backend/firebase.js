// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDl_M9U1c_TFZwSSY528zMvzVbkTWr3luY",
    authDomain: "chapi-1bffb.firebaseapp.com",
    projectId: "chapi-1bffb",
    storageBucket: "chapi-1bffb.appspot.com",
    messagingSenderId: "641954315794",
    appId: "1:641954315794:web:257e11ff404511e7bd62cb",
    measurementId: "G-1MQQSQ8CE0"
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);
export const auth = getAuth(appFirebase);
export const db = getFirestore(appFirebase);