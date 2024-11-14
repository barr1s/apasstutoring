// Import the necessary Firebase functions
// Initializes firebase 
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
// getAuth manages authentication 
// sign in with email preset 
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Firebase configuration
// Perosonal firebase config 
const firebaseConfig = {
    apiKey: "AIzaSyDo78-bImycPILMFtlK_LVFmVDjfvHCwfA",
    authDomain: "apass-tutoring.firebaseapp.com",
    projectId: "apass-tutoring",
    storageBucket: "apass-tutoring.firebasestorage.app",
    messagingSenderId: "400077079853",
    appId: "1:400077079853:web:49b87e193febe7d1a57fa4",
    measurementId: "G-1F8C5GRW0T"
};
// ONOFFCHANGED - 

// Initialize Firebase
// "Turning on Firebase"
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Event listener module that will only run once the page has fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Get elements
    // Defining submitbutton in context of code
    // when "submit" is triggered from the HTML this code stores it into const
    const submitButton = document.getElementById("submit");
    // when "message" is triggered in HTML this converts it to a const in js
    const message = document.getElementById("message");

    // Event listener for the login button
    // Submit button logic
    submitButton.addEventListener("click", async (event) => {
        event.preventDefault();

        // Get email and password values
        const email = document.querySelector(".input-box input[type='text']").value;
        const password = document.querySelector(".input-box input[type='password']").value;

        try {
            // Sign in the user with email and password
            const userCredential = await signInWithEmailAndPassword(auth, email, password);

            // Success message and redirect
            message.textContent = "Login successful!";
            message.className = "success"; // Apply success class for green color
            console.log("Logged in:", userCredential.user);

            // Redirect to the homepage (replace 'homepage.html' with your actual homepage URL)
            setTimeout(() => {
                window.location.href = "loggedin.html";
            }, 500);
        } catch (error) {
            // Display error message
            message.textContent = `Error: ${error.message}`;
            message.className = "error"; // Apply error class for red color
            console.error("Login error:", error);
        }
    });
});
