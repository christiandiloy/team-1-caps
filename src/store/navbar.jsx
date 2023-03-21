import React from "react";
import { Link } from "react-router-dom";
import "./store.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function StoreNavBar(props) {
  const [currentLink, setCurrentLink] = useState("");
  const location = useLocation();

  useEffect(() => {
    setCurrentLink(location.pathname.substring(1));
  }, [location]);

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid justify-content-center">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <Link
                class="nav-link"
                to="/all-products"
                onClick={() => {
                  props.setCurrentLink("/all-products");
                }}
              >
                All Products
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="/box-mods"
                onClick={() => {
                  props.setCurrentLink("/box-mods");
                }}
              >
                Box Mods
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="/replacement-pods"
                onClick={() => {
                  props.setCurrentLink("/replacement-pods");
                }}
              >
                Replacement Pods
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="/replacement-coils"
                onClick={() => {
                  props.setCurrentLink("/replacement-coils");
                }}
              >
                Replacement Coils
              </Link>
            </li>
            <li>
              <Link
                class="nav-link"
                to="/box-mod-kits"
                onClick={() => {
                  props.setCurrentLink("/box-mod-kits");
                }}
              >
                Pod and Box mod Kits
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default StoreNavBar;
