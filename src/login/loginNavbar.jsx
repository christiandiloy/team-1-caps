import React from "react";
import "./loginNav.css";

export default function LoginNav() {
  return (
    <>
      <nav class="navbar login-nav p-4 text-center">
        <div className="container justify-content-center border border-warning rounded p-3">
          <h4 className="text-warning lead ">
            WARNING: Anyone below the age of 21 is prohibited from buying
            e-cigarette.
          </h4>
        </div>
      </nav>
    </>
  );
}
