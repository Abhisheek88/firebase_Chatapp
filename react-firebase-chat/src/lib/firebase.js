// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";          
import { getAuth } from "firebase/auth";          
import { getFirestore} from "firebase/firestore";          

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-ba507.firebaseapp.com",
  projectId: "reactchat-ba507",
  storageBucket: "reactchat-ba507.firebasestorage.app",
  messagingSenderId: "756376317648",
  appId: "1:756376317648:web:1c8072fcd8e24b108d78d5"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
