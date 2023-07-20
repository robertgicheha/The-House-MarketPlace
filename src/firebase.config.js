// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyD8HSKJ0kntQFuKMUbpiFI7AJ9zkJwyGYA",
  authDomain: "house-marketplace-app-27ef9.firebaseapp.com",
  projectId: "house-marketplace-app-27ef9",
  storageBucket: "house-marketplace-app-27ef9.appspot.com",
  messagingSenderId: "290846131329",
  appId: "1:290846131329:web:cc45a20df8f3dac0c13980"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore() 