import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9zJVjlcbWChhk0zI3rkur1i6Ia2xiInA",
  authDomain: "megatrades-x.firebaseapp.com",
  projectId: "megatrades-x",
  storageBucket: "megatrades-x.firebasestorage.app",
  messagingSenderId: "760612593852",
  appId: "1:760612593852:web:acb094f8546fc991ba70b9",
  measurementId: "G-7XK0QEL2HK"
};

// Initialize Firebase
const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app();

// Initialize Services
export const storage = app.storage();
export const db_firestore = app.firestore();

export default app;