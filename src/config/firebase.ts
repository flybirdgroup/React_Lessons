// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIRWgLbolLUyEVHKr_UEv46m3yPniXfFE",
  authDomain: "query-11.firebaseapp.com",
  projectId: "query-11",
  storageBucket: "query-11.appspot.com",
  messagingSenderId: "773548994179",
  appId: "1:773548994179:web:0991fd39f3dc4a645bf5b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();