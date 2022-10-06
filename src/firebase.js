import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCU7oeb8ENn8V4M5fruVEZZJk5abf_HnrU",
  authDomain: "social-media-app-398bf.firebaseapp.com",
  projectId: "social-media-app-398bf",
  storageBucket: "social-media-app-398bf.appspot.com",
  messagingSenderId: "250221568540",
  appId: "1:250221568540:web:fdeed280e4a54bb5e135d9",
  measurementId: "G-194N17GF3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);