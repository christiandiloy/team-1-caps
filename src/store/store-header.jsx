import "./store.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { fetchUserProfile } from "../Utils/fetch";

export default function Navbar(props) {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const [userData, setUserData] = useState({
    fullName: "",
  });

  useEffect(() => {
    fetchUserProfile()
      .then((data) => {
        setUserData({
          fullName: data.full_name,
        });
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  }, []);

  return (
    <nav className="navbar" id="store-header">
      <div>
        <Link
          to="/"
          onClick={() => {
            props.setCurrentLink("/");
          }}
          className="navbar-logo"
        >
          <img
            className="sh-img"
            src="/assets/images/gons-dispo-header.png"
            alt="Gons Dispo Logo"
          />
        </Link>
      </div>
      <div className="navbar-search">
        <i className="fas fa-search search-icon"></i>
        <input
          type="text"
          className="i-text"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="navbar-cart">
        <div className="dropdown">
          <p className="storeHeader-fullname h4 text-light d-flex">
            <span>
              <i class="fas fa-user-circle"></i>
            </span>
            &nbsp;
            {userData.fullName}
          </p>

          <div className="dropdown-content">
            <Link
              to="/Profile"
              onClick={() => {
                props.setCurrentLink("/Profile");
              }}
            >
              View Profile
            </Link>

            <a onClick={logout}>Log out</a>
          </div>
        </div>
        <Link
          to="/store/my-cart"
          onClick={() => {
            props.setCurrentLink("/store/my-cart");
          }}
          className="page-links nav-link"
        >
          <i className="fas fa-cart-plus nav-icon" id="header-icons"></i>
        </Link>
      </div>
    </nav>
  );
}
