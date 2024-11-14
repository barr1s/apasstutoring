// Import the functions you need from the Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDo78-bImycPILMFtlK_LVFmVDjfvHCwfA",
    authDomain: "apass-tutoring.firebaseapp.com",
    projectId: "apass-tutoring",
    storageBucket: "apass-tutoring.firebasestorage.app",
    messagingSenderId: "400077079853",
    appId: "1:400077079853:web:49b87e193febe7d1a57fa4",
    measurementId: "G-1F8C5GRW0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById('submit');
    const message = document.getElementById('message');
    const loadingScreen = document.getElementById('loadingScreen');

    // Event listener for the form submit button
    submitButton.addEventListener("click", async (event) => {
        event.preventDefault();
        loadingScreen.style.display = "flex";

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            message.textContent = "Registration successful!";
            message.style.color = "green";
            console.log("User created:", userCredential.user);

            // Redirect after confirming Firebase has created the user
            setTimeout(() => {
                loadingScreen.style.display = "none";
                window.location.assign("login.html"); // Using `assign` instead of `href`
            }, 500); // Increased delay slightly to ensure completion

        } catch (error) {
            message.textContent = `Error: ${error.message}`;
            message.style.color = "red";
            console.error("Registration error:", error);
            loadingScreen.style.display = "none";
        }
    });
});
