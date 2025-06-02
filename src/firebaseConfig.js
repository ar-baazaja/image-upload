import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCzeHmBOyBDxJaeeyl_TnbU0k0H9ecSrbM",
  authDomain: "image-upload-de6e4.firebaseapp.com",
  projectId: "image-upload-de6e4",
  storageBucket: "image-upload-de6e4.appspot.com",  
  messagingSenderId: "397403363135",
  appId: "1:397403363135:web:5b5f9190ab0c775bc5e58a",
  measurementId: "G-P8EBG83TD2"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
