import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKR-UB2i2dwz0nbkzTxylcg1W3caXnUa4",
  authDomain: "fir-2557c.firebaseapp.com",
  projectId: "fir-2557c",
  storageBucket: "fir-2557c.firebasestorage.app",
  messagingSenderId: "629285832228",
  appId: "1:629285832228:web:c4155a6b3cf93e3782bab1",
  measurementId: "G-4XM69LKQ2X",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, getAuth };
