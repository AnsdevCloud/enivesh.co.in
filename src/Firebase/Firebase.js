
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBtYyTy07P0_epw3GueA_ZhlE4pvrZXUgE",
    authDomain: "enivesh-3d58e.firebaseapp.com",
    projectId: "enivesh-3d58e",
    storageBucket: "enivesh-3d58e.appspot.com",
    messagingSenderId: "769360783671",
    appId: "1:769360783671:web:57887c1864e8160a65d2b2",
    measurementId: "G-P5GPNT2Z04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// Initialize Firebase Read and Write data 
export const dataDB = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider }
