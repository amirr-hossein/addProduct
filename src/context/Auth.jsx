import React, { useState, createContext, useEffect } from "react";
import useDarkMode from "../hooks/Them";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [theme, toggleTheme] = useDarkMode();
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
      } else {
        setIsLoggedIn(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loginHandler = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Login Error:", error.message);
    }
  };

  const signupHandler = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Signup Error:", error.message);
    }
  };

  const logoutHandler = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  if (loading) {
    return <div
    style={{
      background: theme === "dark" ? "#0F1035" : "#DCF2F1",
    }}>Loading...</div>;
  }

  return (
    <AuthContext.Provider
      value={{
        isAuth: isLoggedIn,
        login: loginHandler,
        signup: signupHandler,
        logout: logoutHandler,
        user: user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
