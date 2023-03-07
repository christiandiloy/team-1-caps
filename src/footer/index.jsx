import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row g-0 mx-0 justify-content-between align-items-center">
            <div className="col-lg-4 text-center">
              <div className="footer-about">
                <div className="footer-logo">
                  <img
                    className="footer-logo"
                    src="./assets/images/gons-dispo-header.png"
                    alt="Gons Dispo Logo"
                  />
                </div>
                <i className="fa-solid fa-location-dot">
                  &nbsp; 101# Beltran St. Brgy. Consuelo Sur, San Marcelino,
                  Zambales
                </i>
                <i className="fa-solid fa-phone">0919 656 0285</i>
              </div>
            </div>

            <div className="col-lg-4 text-center">
              <div className="footer-widget">
                <h6>Contact Us</h6>
                <ul>
                  <li>
                    <i className="fa-brands fa-facebook text-warning"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-twitter text-warning"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-instagram text-warning"></i>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 offset-lg-1">
              <div className="footer-widget">
                <h6>NewsLetter</h6>
                <div className="footer-newslatter">
                  <p>
                    Be the first to know about new arrivals, subscribed now!
                  </p>
                  <form action="#">
                    <input type="text" placeholder="Your Email" />
                    <button type="submit">
                      <span>
                        <i className="fa fa-envelope" arial-hidden="true"></i>
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="rontainer">
            <div className="text-center">
              <div className="footer-copyright-text">
                <p>
                  Copyright &copy; 2023 All rights reserved | Gon's Dispo Vape
                  Shop
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
