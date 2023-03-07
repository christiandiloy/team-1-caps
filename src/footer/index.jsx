import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row g-0 mx-0 justify-content-between align-items-center">
            <div className="col-lg-3">
              <div className="footer-about">
                <div className="footer-logo">
                  <img
                    className="footer-logo"
                    src="./assets/images/gons-dispo-header.png"
                    alt="Gons Dispo Logo"
                  />
                </div>
                <p>
                  Our journey began with a passion for vaping and a desire to
                  share that passion with others. We noticed a gap in the market
                  for a vape shop that offers a comprehensive range of products,
                  exceptional customer service, and a comfortable environment
                  for vapers to explore their hobby.
                </p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="footer-widget">
                <h6>Links</h6>
                <ul>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Payment Methods</a>
                  </li>
                  <li>
                    <a href="#">Delivary</a>
                  </li>
                  <li>
                    <a href="#">Return & Exchanges</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 offset-lg-1">
              <div className="footer-widget">
                <h6>NewsLetter</h6>
                <div className="footer-newslatter">
                  <p>
                    Be the first to know about new arrivals, look books, sales &
                    promos!
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

          <div className="row">
            <div className="col-lg-12 text-center">
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
