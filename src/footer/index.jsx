import React from "react";
import { SubscriberAPI } from "../Utils/fetch";
import "./footer.css";
import FooterLogo from "../assets/images/gons-dispo-header.png";

export default function Footer() {

  const subscriber = () => {
    const email = document.getElementById("email").value;

    SubscriberAPI(email)
    .then((result) => {
      return result.json
    })
    .then((result) => {
        if (result.success) {
          //go to dashboard / home
          localStorage.setItem("subscriber", JSON.stringify(result.userData)); // put back if you want to automatically login
          window.location.href = "http://localhost:3000/"; // change to http://localhost:3000/ if you want to automatically login
        } else {
          alert(result.message); //Change this to show hide and not on alert
        }
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row g-0 mx-0 justify-content-between align-items-center">
            <div className="col-lg-6 text-center">
              <div className="footer-about">
                <div className="footer-logo">
                  <img
                    className="footer-logo"
                    src={FooterLogo}
                    alt="Gons Dispo Logo"
                  />
                </div>
                <p className="text-light h6">
                  <i className="fa-solid fa-location-dot text-warning">
                    &nbsp;
                  </i>
                  101# Beltran St. Brgy. Consuelo Sur, San Marcelino, Zambales
                </p>
                <p className="text-light h6">
                  <i className="fa-solid fa-phone text-warning">&nbsp;</i>0919
                  656 0285
                </p>
              </div>
            </div>

            <div className="footer-social-col col-lg-2 text-center pt-4 mb-3">
              <div className="footer-widget">
                <h6>Social Links</h6>
                <ul className="footer-social-links d-flex justify-content-center">
                  <li>
                    <a
                      href="https://www.facebook.com/gon.freecss.ygg"
                      target="_blank"
                    >
                      <i className="fa-brands fa-facebook text-warning"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/GonsDispo" target="_blank">
                      <i className="fa-brands fa-twitter text-warning mx-4"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/GonsDispo/"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram text-warning"></i>
                    </a>
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
                    <input type="email" placeholder="Your Email" name="email" id="email" />
                    <button onClick={subscriber} type="submit">
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
