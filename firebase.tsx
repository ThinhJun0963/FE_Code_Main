// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage, ref} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "[API Key here]",
//   authDomain: "[Auth domain here]",
//   projectId: "[Project ID here]",
//   storageBucket: "[Bucket ID here]",
//   messagingSenderId: "[Sender ID here]",
//   appId: "[Your App ID here]"
// };

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);