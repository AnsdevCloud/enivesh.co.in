import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/firestore'
import 'firebase/compat/analytics'// Add other Firebase services if needed
import 'firebase/compat/storage'// Add other Firebase services if needed
import 'firebase/compat/auth'// Add other Firebase services if needed

const firebaseConfig = {
    apiKey: "AIzaSyCjql6HUvhUo7m1miAJoRgzLHW3bJVOyQw",
    authDomain: "enivesh-cloud.firebaseapp.com",
    databaseURL: "https://enivesh-cloud-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "enivesh-cloud",
    storageBucket: "enivesh-cloud.appspot.com",
    messagingSenderId: "966140757385",
    appId: "1:966140757385:web:0dec3b797dc453a45a4d58",
    measurementId: "G-1ZZ5EW75Q9"
};

const fb = firebase.initializeApp(firebaseConfig);

fb.analytics();
fb.auth()



export default fb;