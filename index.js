import { initializeApp } from "firebase/app";
import "./views/main-view.js";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbKhB6SoWGv6ppd1QFyQCFXUcMHMVj2jA",
  authDomain: "my-first-project-d43f2.firebaseapp.com",
  projectId: "my-first-project-d43f2",
  storageBucket: "my-first-project-d43f2.appspot.com",
  messagingSenderId: "420425494066",
  appId: "1:420425494066:web:6a5620068228b82b6c162b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log(app);
