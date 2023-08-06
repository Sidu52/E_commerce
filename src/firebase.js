// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_API_KEY,
//     authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//     projectId: import.meta.env.VITE_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//     appId: import.meta.env.VITE_APP_ID,
//     measurementId: import.meta.env.VITE_MEASURE_MENT_ID
// };
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAc3q7GNUqRLqYxa7Z1FolAa07txJs2xSI",
    authDomain: "e-commerce-5d83b.firebaseapp.com",
    projectId: "e-commerce-5d83b",
    storageBucket: "e-commerce-5d83b.appspot.com",
    messagingSenderId: "257237567150",
    appId: "1:257237567150:web:60229cbbbe5208b43acf3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);