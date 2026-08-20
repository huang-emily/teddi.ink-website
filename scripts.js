// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrAUVWknNyHXq9_HWyaXoxcO060JphEF4",
  authDomain: "teddi-ink-website.firebaseapp.com",
  projectId: "teddi-ink-website",
  storageBucket: "teddi-ink-website.firebasestorage.app",
  messagingSenderId: "478443544657",
  appId: "1:478443544657:web:49c6997a2232c29d2e9870",
  measurementId: "G-MZRSN9DM4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);