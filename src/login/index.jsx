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
      <div className="login-home">
        <LoginNav />
        <div className="container login-container">
          <div className="border rounded bg-light p-5">
            {isSignIn ? <SignIn /> : <SignUp />}
            <p className="login-plink ms-3">
              {isSignIn
                ? "Don't have an account yet?"
                : "Already have an account?"}{" "}
              &nbsp;
              <a className="login-link link-warning" onClick={toggleSignInUp}>
                {isSignIn ? "Sign up here" : "Sign in"}
              </a>
              {isSignIn ? "" : " here instead"}
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Login;
