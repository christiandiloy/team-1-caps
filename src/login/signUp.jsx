import { RegisterAPI } from "../Utils/fetch";
import React, { useState } from "react";
function SignUp() {
  let isUserLoggedIn = false;
  try {
    isUserLoggedIn = JSON.parse(localStorage.getItem("user"));
    if (isUserLoggedIn && isUserLoggedIn.id) {
      window.location.href = "http://localhost:3000/";
    }
  } catch (error) {}

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;

  const register = () => {
    RegisterAPI(username, password, fullName, email)
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        if (result.success) {
          //go to dashboard / home
          localStorage.setItem("user", JSON.stringify(result.userData)); // put back if you want to automatically login
          window.location.href = "http://localhost:3000/"; // change to http://localhost:3000/ if you want to automatically login
        } else {
          alert("Invalid Credentials");
        }
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [passwordStrengthClass, setPasswordStrengthClass] = useState("");
  const [isStrongPassword, setIsStrongPassword] = useState(false);

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    const rePassword = document.getElementById("re-password").value;

    // Check if password meets strength requirements
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const isStrongPassword = passwordRegex.test(password);

    // Update password strength indicator
    let passwordStrength = "";
    let passwordStrengthClass = "";
    if (password.length === 0) {
      passwordStrength = "";
      passwordStrengthClass = "";
    } else if (password.length < 8 || !isStrongPassword) {
      passwordStrength = "Password strength: Weak";
      passwordStrengthClass = "login-passStrength text-danger";
    } else {
      passwordStrength = "Password strength: Strong";
      passwordStrengthClass = "login-passStrength text-success";
    }

    setPasswordStrength(passwordStrength);
    setPasswordStrengthClass(passwordStrengthClass);
    setPasswordsMatch(password === rePassword);
    setIsStrongPassword(isStrongPassword);
  };

  const handleRePasswordChange = (event) => {
    const password = document.getElementById("password").value;
    const rePassword = event.target.value;
    setPasswordsMatch(password === rePassword);
  };

  return !isUserLoggedIn ? (
    <>
      <div className="row justify-content-center align-items-center m-0">
        <div className="container col me-0 me-lg-3">
          <h2 className="lead display-6 text-center text-muted mb-5">
            Register your account.
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
              type="password"
              maxLength="8"
              className="form-control"
              id="password"
              placeholder="Enter Password"
              onChange={handlePasswordChange}
            />
          </div>
          <p className={passwordStrengthClass}>{passwordStrength}</p>

          <div className="input-group my-3">
            <span className="input-group-text bg-light">
              <i className="fa-solid fa-key"></i>
            </span>
            <input
              type="password"
              maxLength="8"
              className="form-control"
              id="re-password"
              placeholder="Confirm Password"
              onChange={handleRePasswordChange}
            />
          </div>
          {!passwordsMatch && (
            <p className="login-passNotMatch">* Password does not match.</p>
          )}

          <div className="input-group my-3">
            <span className="input-group-text bg-light">
              <i className="fa-regular fa-id-card"></i>
            </span>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter Full Name"
            />
          </div>

          <div className="input-group my-3">
            <span className="input-group-text bg-light">
              <i className="fa-regular fa-envelope"></i>
            </span>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email"
            />
          </div>

          <button
            type="submit"
            className="btn btn-lg w-100 btn-warning text-light"
            onClick={register}
            disabled={!passwordsMatch || !isStrongPassword}
          >
            Register
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

export default SignUp;
