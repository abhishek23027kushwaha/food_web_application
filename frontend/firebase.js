// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASyfZweI0pVvitWHgB3yS6ix5hH-6Zsa8",
  authDomain: "food-d9907.firebaseapp.com",
  projectId: "food-d9907",
  storageBucket: "food-d9907.firebasestorage.app",
  messagingSenderId: "979558394063",
  appId: "1:979558394063:web:4d9e540ef88a33701cefba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider };