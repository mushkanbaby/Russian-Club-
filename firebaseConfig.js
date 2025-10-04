// ✅ Master Firebase Config File
// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// ⚠️ Replace with your Firebase credentials
const firebaseConfig = {
    apiKey: "AIzaSyDlEY_2bDv25T5GTCzTEk7sQIZrAxh5irc",
    authDomain: "russian-club.firebaseapp.com",
    projectId: "russian-club",
    storageBucket: "russian-club.appspot.com",
    messagingSenderId: "1096848291195",
    appId: "1:1096848291195:web:2c8c12e9c6c913f83210c7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);