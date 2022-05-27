/* eslint-disable no-unused-vars */
import React from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../misc/firebase";

const Signin = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  return (
    <div>
      <button onClick={googleSignIn}>sign in with google</button>
    </div>
  );
};

export default Signin;
