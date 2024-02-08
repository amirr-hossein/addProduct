// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAdGlMpvcdl3Pmfq-qhQER1JOqvol2UK4",
  authDomain: "practice-react-d0abc.firebaseapp.com",
  databaseURL: "https://practice-react-d0abc-default-rtdb.firebaseio.com",
  projectId: "practice-react-d0abc",
  storageBucket: "practice-react-d0abc.appspot.com",
  messagingSenderId: "19737889458",
  appId: "1:19737889458:web:70827fc18b06def90557ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export {auth}