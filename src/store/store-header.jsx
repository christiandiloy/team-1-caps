import "./store.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { fetchUserProfile } from "../Utils/fetch";
import SearchBar from "./SearchBar";
import { useCartTotals } from "./features/cartSlice";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar(props) {
  const [results, setResults] = useState([]);
  const { cartTotalAmount, cartTotalQuantity } = useCartTotals();

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
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
        </Link>
      </div>
      <SearchBar setResults={setResults} />
      <div className="navbar-cart">
        <div className="dropdown header-profile">
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
          to="/my-cart"
          style={{
            width: "3rem",
            height: "3rem",
            position: "relative",
            marginTop: "25px",
          }}
          onClick={() => {
            props.setCurrentLink("/my-cart");
          }}
          className="page-links nav-link"
        >
          <div className="cart-icon">
            <div className="cart-icon-container">
              <FaShoppingCart className="cart-cart"/>
            </div>

            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(-15%, -20%)",
              }}
            >
              <span>{cartTotalQuantity}</span>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
}
