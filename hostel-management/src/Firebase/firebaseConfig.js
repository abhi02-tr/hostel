import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCg97OvCI8g-1UML7WY5IZxG5soLsuo-ow",
    authDomain: "test-181df.firebaseapp.com",
    databaseURL: "https://test-181df.firebaseio.com",
    projectId: "test-181df",
    storageBucket: "test-181df.appspot.com",
    messagingSenderId: "393349419767",
    appId: "1:393349419767:web:26959b59641a32fd3db9f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)