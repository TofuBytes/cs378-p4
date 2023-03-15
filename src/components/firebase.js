// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhe2Ux3Rd1NYNafxGQht-s80ooQrpYYew",
  authDomain: "cs378-c1009.firebaseapp.com",
  databaseURL: "https://cs378-c1009-default-rtdb.firebaseio.com",
  projectId: "cs378-c1009",
  storageBucket: "cs378-c1009.appspot.com",
  messagingSenderId: "126302588312",
  appId: "1:126302588312:web:7aeb4b99fcea2c52986fed",
  measurementId: "G-BYN8XM6NYT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;