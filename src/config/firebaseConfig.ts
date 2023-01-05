// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj1Yz7xf8_UGaJJS5d4Y_PjZT-uVFjjF0",
  authDomain: "f1ac-58005.firebaseapp.com",
  projectId: "f1ac-58005",
  storageBucket: "f1ac-58005.appspot.com",
  messagingSenderId: "744959963041",
  appId: "1:744959963041:web:c4cf66eaac062a49d0a5e0",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
