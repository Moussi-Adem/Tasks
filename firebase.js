// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'; // Import Firestore
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAbLZN4JhxzxWxds5Y2EsI-JAcVQyIJEG0",
    authDomain: "healthinsight-ai.firebaseapp.com",
    projectId: "healthinsight-ai",
    storageBucket: "healthinsight-ai.appspot.com",
    messagingSenderId: "816211425035",
    appId: "1:816211425035:web:e0b4ee49252da12f08940e",
    measurementId: "G-6VDE3V2FYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const storage = getStorage(app);
const db = getFirestore(app); // Correct initialization for Firestore

// Export the services
export { storage, db }; // Ensure db is exported
export const googleProvider = new GoogleAuthProvider();
