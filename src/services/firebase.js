// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaU6rJcMlafsmMYa6n9Zc7KDLx4cFr4CY",
  authDomain: "stuinfoo.firebaseapp.com",
  projectId: "stuinfoo",
  storageBucket: "stuinfoo.appspot.com",
  messagingSenderId: "774098717056",
  appId: "1:774098717056:web:d68686152b4f3daa11d965",
  measurementId: "G-RJ7563VYVC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
