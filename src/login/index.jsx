import { Link } from "react-router-dom";
import { LoginAPI } from "../Utils/fetch";

import React from "react";

function Login() {
  let isUserLoggedIn = false;
  try {
    isUserLoggedIn = JSON.parse(localStorage.getItem("user"));
    if (isUserLoggedIn && isUserLoggedIn.id) {
      window.location.href = "http://localhost:3000/store";
    }
  } catch (error) {}

  const login = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log("username: ", username);
    console.log("password: ", password);
    LoginAPI(username, password)
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        console.log("result: ", result);
        console.log("localStorage: ", localStorage);
        if (result.success) {
          //go to dashboard / home
          localStorage.setItem("user", JSON.stringify(result.userData));
          window.location.href = "http://localhost:3000/store";
        } else {
          // alert user that credentials is invalid
        }
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };
  return !isUserLoggedIn ? (
    <div className="">
      <input
        id="username"
        className="input100"
        type="text"
        placeholder="Username"
      />

      <input
        id="password"
        className="input100"
        type="password"
        placeholder="Password"
      />

      <input className="" id="ckb1" type="checkbox" name="remember-me" />
      <label className="label-checkbox100" htmlFor="ckb1">
        Remember me
      </label>

      <a href="#" className="">
        Forgot Password?
      </a>

      <button className="login100-form-btn" onClick={login}>
        Login
      </button>

      <Link to="/Register" className="">
        Sign-up
      </Link>
    </div>
  ) : (
    <></>
  );
}

export default Login;
