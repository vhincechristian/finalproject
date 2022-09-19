// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'

import { getAuth } from 'firebase/auth'
import "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzG1A8so8rjofhrYdSW5iIaIrKsGCx13E",
    authDomain: "finalproject-2b8da.firebaseapp.com",
    databaseURL: "https://finalproject-2b8da-default-rtdb.firebaseio.com",
    projectId: "finalproject-2b8da",
    storageBucket: "finalproject-2b8da.appspot.com",
    messagingSenderId: "311508412811",
    appId: "1:311508412811:web:c3ed529da13317c018678e",
    measurementId: "G-VF15RW8BBP"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const auth = getAuth();

export { app, auth, database }