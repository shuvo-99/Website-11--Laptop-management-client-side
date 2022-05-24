// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXpYQm-CoEcPMUzL1KuEonHWHQttG1gVc",
  authDomain: "laptop-management-website.firebaseapp.com",
  projectId: "laptop-management-website",
  storageBucket: "laptop-management-website.appspot.com",
  messagingSenderId: "23923295283",
  appId: "1:23923295283:web:9dfef5c590bc141b128f46",
  measurementId: "G-3X2RCE6PHS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
