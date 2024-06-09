import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
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


// Initialize Firebase Authentication and get a reference to the service

export const auth = getAuth(app);

