// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBO4yLoxSQqEf20iN9AoGrlNQjsRvrNBB8",
  authDomain: "recruteidev.firebaseapp.com",
  projectId: "recruteidev",
  storageBucket: "recruteidev.appspot.com", // Corrigido aqui
  messagingSenderId: "34891021976",
  appId: "1:34891021976:web:d1fb566036de308a1a9aed",
  measurementId: "G-9B6LR4RDXD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
