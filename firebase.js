// Import Firebase Modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVTV5-48Y0R0bMXEP719t38qnA6bdk4AY",
  authDomain: "login-page-e0ff8.firebaseapp.com",
  projectId: "login-page-e0ff8",
  storageBucket: "login-page-e0ff8.firebasestorage.app",
  messagingSenderId: "212622563742",
  appId: "1:212622563742:web:afe0a9f6783e8a07465e8f",
  measurementId: "G-6JLNH8VLVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Function to log in using Email & Password
window.login = function() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        alert("Login Successful!");
        console.log(userCredential.user);
        window.location.href = "dashboard.html"; // Redirect to dashboard
    })
    .catch((error) => {
        alert("Login Failed: " + error.message);
    });
};

// Function to log in using Google
window.googleLogin = function() {
    signInWithPopup(auth, provider)
    .then((result) => {
        alert("Google Login Successful!");
        console.log(result.user);
        window.location.href = "dashboard.html"; // Redirect to dashboard
    })
    .catch((error) => {
        alert("Google Login Failed: " + error.message);
    });
};

// Function to sign up with Email & Password
window.signup = function() {
    let name = document.getElementById("signup-name").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        alert("Signup Successful! You can now log in.");
        console.log(userCredential.user);
    })
    .catch((error) => {
        alert("Signup Failed: " + error.message);
    });
};
