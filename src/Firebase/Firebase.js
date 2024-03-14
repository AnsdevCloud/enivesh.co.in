
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBrmkQQyVZ-Q-vAkYIAG4CLWgDkNTYjMdg",
    authDomain: "enivesh-54d95.firebaseapp.com",
    databaseURL: "https://enivesh-54d95-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "enivesh-54d95",
    storageBucket: "enivesh-54d95.appspot.com",
    messagingSenderId: "309768927200",
    appId: "1:309768927200:web:d5de33f0335d8e0f97dd85",
    measurementId: "G-XLWJWG31M4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// Initialize Firebase Read and Write data 
const dataDB = getDatabase(app);
const db = getFirestore(app)
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider, db }
