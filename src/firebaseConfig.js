// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBCXFt5eNW3z56YWSu5jsIgHkKk6eQ7Vzk",
    authDomain: "zentage-booking.firebaseapp.com",
    projectId: "zentage-booking",
    storageBucket: "zentage-booking.firebasestorage.app",
    messagingSenderId: "734971117323",
    appId: "1:734971117323:web:a731c1c25745bcbbe92c0e",
    measurementId: "G-G1E5CPGJ3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);