// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";  // Add this import

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGfSFwXXKnjzC5ubhq_PXhs0F2p-AtWMM",
  authDomain: "et-marketplace-3372b.firebaseapp.com",
  projectId: "et-marketplace-3372b",
  storageBucket: "et-marketplace-3372b.firebasestorage.app",
  messagingSenderId: "445992659663",
  appId: "1:445992659663:web:f8f0a5fa59b801438625ba",
  measurementId: "G-SZEP63850Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
// Initialize Firebase Authentication
export const auth = getAuth(app);

export default app;