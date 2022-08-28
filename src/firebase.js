// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCC_KSR1yQgDjuqdykIcXIirGnuG4ic9Nw",
  authDomain: "rscoe-web.firebaseapp.com",
  projectId: "rscoe-web",
  storageBucket: "rscoe-web.appspot.com",
  messagingSenderId: "217318525458",
  appId: "1:217318525458:web:8eab68e222e26f2f66a6cb",
  measurementId: "G-JECXZLV9T1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage();
