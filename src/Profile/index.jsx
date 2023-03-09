import React from "react";
import "./profile.css";

export default function Profile() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="profile-tab col-2 ">
            <a
              href="/"
              class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
            >
              <span class="fs-4">Sidebar</span>
            </a>
            <hr />
            <ul class="nav nav-pills flex-column mb-auto">
              <li class="nav-item">
                <a href="#" class="nav-link active" aria-current="page">
                  Profile
                </a>
              </li>
              <li>
                <a href="#" class="nav-link link-dark">
                  Orders
                </a>
              </li>
              <li>
                <a href="#" class="nav-link link-dark">
                  Adress
                </a>
              </li>
            </ul>
            <hr />
          </div>
          <div className="col-10"></div>
        </div>
      </div>
    </>
  );
}
