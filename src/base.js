
    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCSnYCQlavz52DJb16ChkarHtKCjLdpTA",
  authDomain: "react-todo-70a78.firebaseapp.com",
  projectId: "react-todo-70a78",
  storageBucket: "react-todo-70a78.appspot.com",
  messagingSenderId: "365884479009",
  appId: "1:365884479009:web:108893ef2071d1bb1f3560"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {auth }