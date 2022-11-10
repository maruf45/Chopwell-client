import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext();
const UseContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const CreateUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const provider = new GithubAuthProvider()
  const UpdateUserProfile = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  const SignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const github = () => {
    setLoading(true);
    return signInWithPopup(auth, provider)
  }
  const singOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const emailVerification =() => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = { user, CreateUser, UpdateUserProfile, SignIn, github, singOut, emailVerification , loading};
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default UseContext;
