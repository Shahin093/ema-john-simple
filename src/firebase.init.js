// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOpagmIfyPHPxvmNWFZHH-3eSDB_e14cw",
    authDomain: "ema-john-simple-803fb.firebaseapp.com",
    projectId: "ema-john-simple-803fb",
    storageBucket: "ema-john-simple-803fb.appspot.com",
    messagingSenderId: "223930317372",
    appId: "1:223930317372:web:9c0b6a149043a4a1b06139"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export default app;


const auth = getAuth(app);
export default auth;