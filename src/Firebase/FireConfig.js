import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/firestore'
import 'firebase/compat/analytics'// Add other Firebase services if needed
import 'firebase/compat/storage'// Add other Firebase services if needed
import 'firebase/compat/auth'// Add other Firebase services if needed

const firebaseConfig = {
    apiKey: "AIzaSyDJDd6fs6ckN4Q6X6f9NtyYBnhMT3wtay4",
    authDomain: "enivesh-2f62f.firebaseapp.com",
    projectId: "enivesh-2f62f",
    storageBucket: "enivesh-2f62f.appspot.com",
    messagingSenderId: "725639224656",
    appId: "1:725639224656:web:f6c6f39d5cfac73b66e055",
    measurementId: "G-JGPPFPE6R9"
};

const fb = firebase.initializeApp(firebaseConfig);
fb.analytics();
fb.auth()



export default fb;