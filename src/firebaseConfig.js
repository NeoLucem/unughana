// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwcHZE4p_XuLp7XBUz-C4_Mr1mwxoJX04",
  authDomain: "inughana-test.firebaseapp.com",
  projectId: "inughana-test",
  storageBucket: "inughana-test.appspot.com",
  messagingSenderId: "558330472100",
  appId: "1:558330472100:web:84fe79d9173f8e6a72a831",
  measurementId: "G-7RC3TKX99B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// const analytics = getAnalytics(app);