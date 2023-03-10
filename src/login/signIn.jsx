import { LoginAPI } from "../Utils/fetch";
import React, { useState } from "react";
import "./login.css";

function SignIn() {
  let isUserLoggedIn = false;
  try {
    isUserLoggedIn = JSON.parse(localStorage.getItem("user"));
    if (isUserLoggedIn && isUserLoggedIn.id) {
      window.location.href = "http://localhost:3000";
    }
  } catch (error) {}

  const login = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    LoginAPI(username, password)
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        if (result.success) {
          //go to dashboard / home
          localStorage.setItem("user", JSON.stringify(result.userData));
          window.location.href = "http://localhost:3000";
        } else {
          alert("Invalid Username or Password");
        }
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    if (event.target.checked) {
      const expiryDate = new Date();
      expiryDate.setHours(expiryDate.getHours() + 12);
      localStorage.setItem(
        "expiryDate",
        JSON.stringify({ time: expiryDate.getTime() })
      );
    } else {
      localStorage.clear();
    }
    setIsChecked((current) => !current);
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return !isUserLoggedIn ? (
    <>
      <div className="row justify-content-center align-items-center m-0">
        <div className="container col me-0 me-lg-3">
          <h2 className="lead display-6 text-center text-muted mb-5">
            Login to your account.
          </h2>
          <div className="input-group">
            <span className="input-group-text bg-light">
              <i className="fa-regular fa-user" />
            </span>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter Username"
            />
          </div>
          <div className="input-group my-3">
            <span className="input-group-text bg-light">
              <i className="fa-solid fa-lock"></i>
            </span>
            <input
              type={passwordShown ? "text" : "password"}
              maxLength="8"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="form-check mb-1">
            <input
              type="checkbox"
              className="form-check-input"
              onChange={togglePassword}
              id="exampleCheck2"
            />
            <label className="form-check-label" htmlFor="exampleCheck2">
              Show Password
            </label>
          </div>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              value={isChecked}
              onChange={handleChange}
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-lg w-100 btn-warning text-light"
            onClick={login}
          >
            Login
          </button>
        </div>
        <div className="col d-none d-lg-block text-center border-start border-warning">
          <img
            className="login-logo img-fluid"
            src="./assets/images/gons-dispo.png"
            alt="Vapehub-Logo"
          />
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}

export default SignIn;
