import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAB40ZCF9Cq4SbBEZCXFNjO_95oDEU8Aj0",
  authDomain: "maskup-5321c.firebaseapp.com",
  projectId: "maskup-5321c",
  storageBucket: "maskup-5321c.appspot.com",
  messagingSenderId: "219379194434",
  appId: "1:219379194434:web:b730dca7c2196d033f6bdb",
  measurementId: "G-BZZKXKVP1K",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
