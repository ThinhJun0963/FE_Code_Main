// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage, ref} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfXzonvAnbxxnsv1MMColm4_9n-lVEQjs",
  authDomain: "dentalclinicbooking-e8ec9.firebaseapp.com",
  projectId: "dentalclinicbooking-e8ec9",
  storageBucket: "dentalclinicbooking-e8ec9.appspot.com",
  messagingSenderId: "764721719991",
  appId: "1:764721719991:web:4ec2197b643798ee9cfb32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage();