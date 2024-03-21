
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDJDd6fs6ckN4Q6X6f9NtyYBnhMT3wtay4",
    authDomain: "enivesh-2f62f.firebaseapp.com",
    projectId: "enivesh-2f62f",
    storageBucket: "enivesh-2f62f.appspot.com",
    messagingSenderId: "725639224656",
    appId: "1:725639224656:web:f6c6f39d5cfac73b66e055",
    measurementId: "G-JGPPFPE6R9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// Initialize Firebase Read and Write data 
const db = getFirestore(app)
const auth = getAuth(app);
const storage = getStorage();
const provider = new GoogleAuthProvider();
export { auth, provider, db, storage }
