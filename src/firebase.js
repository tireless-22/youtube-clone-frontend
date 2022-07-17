
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider } from "firebase/auth"

// GoogleAuthProvider helps to login via google button


const firebaseConfig = {
  apiKey: "AIzaSyCPQAi_UqLCyt_LmFX3yv_by2Z-YOcV6u4",
  authDomain: "clone-b4a33.firebaseapp.com",
  projectId: "clone-b4a33",
  storageBucket: "clone-b4a33.appspot.com",
  messagingSenderId: "1047978924941",
  appId: "1:1047978924941:web:b9561f0fe7b072b724fbc4",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider =new GoogleAuthProvider();

export default app;