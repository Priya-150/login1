import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const auth = getAuth();
const provider = new GoogleAuthProvider();

// Email Login
window.login = function() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        alert("Login Successful!");
        console.log(userCredential.user);
    })
    .catch((error) => {
        alert(error.message);
    });
};

// Google Login
window.googleLogin = function() {
    signInWithPopup(auth, provider)
    .then((result) => {
        alert("Google Login Successful!");
        console.log(result.user);
    })
    .catch((error) => {
        alert(error.message);
    });
};

// Email Signup
window.signup = function() {
    let name = document.getElementById("signup-name").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        alert("Signup Successful!");
        console.log(userCredential.user);
    })
    .catch((error) => {
        alert(error.message);
    });
};
