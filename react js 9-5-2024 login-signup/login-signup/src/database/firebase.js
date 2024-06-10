// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { get } from "firebase/database";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAFCfzc0RM7pWN54L79Q5mX4a2snu3VmA",
  authDomain: "extended-legend-415308.firebaseapp.com",
  projectId: "extended-legend-415308",
  storageBucket: "extended-legend-415308.appspot.com",
  messagingSenderId: "769368000323",
  appId: "1:769368000323:web:04d94209abbbe2a66cd1f6",
  measurementId: "G-MEM6GG2HKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
