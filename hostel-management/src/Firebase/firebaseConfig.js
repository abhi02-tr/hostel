import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDySb-Ch7-vUgi1JO6lZEasaLY_8ATl2LQ",
    authDomain: "adit-hostel.firebaseapp.com",
    databaseURL: "https://adit-hostel.firebaseio.com",
    projectId: "adit-hostel",
    storageBucket: "adit-hostel.appspot.com",
    messagingSenderId: "409626188601",
    appId: "1:409626188601:web:b495d574eb97c627b6e6e8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)