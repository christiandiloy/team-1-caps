import React, { useState } from "react";
import "./login.css";
import LoginNav from "./loginNavbar";
import Footer from "../footer/index";
import SignIn from "./signIn";
import SignUp from "./signUp";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInUp = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <>
      <LoginNav />
      <div className="row row-cols-1 row-cols-lg-2 justify-content-center align-items-center">
        <div className="col">
          <img
            className="login-logo img-fluid"
            src="./assets/images/Vape-hub.svg"
            alt="Vapehub-Logo"
          />
        </div>
        <div className="col">
          {isSignIn ? <SignIn /> : <SignUp />}
          <p>
            {isSignIn ? "Don't have an account?" : "Already have an account?"}
          </p>
          <button onClick={toggleSignInUp}>
            {isSignIn ? "Sign up here" : "Sign in here instead"}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
