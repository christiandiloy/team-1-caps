import GeekvapeZCards from "./geekvape-z-cards";
import React from "react";
import "./styles.css";

function GeekvapeZ() {
  return (
    <main>
      <div
        className="article"
        style={{
          backgroundImage: `url("./assets/images/background/banner-geekvape-z.jpg")`,
        }}
      >
        <div>
          <h1 class="img-header">
            Z SERIES – THE LEAKPROOF
            <br />
            ULTIMATE TANK
          </h1>
          <br />
          <p className="img-text">
            To convey a unified brand image and deliver our business strategy
            clearly to our beloved users, we change Zeus to Geekvape Z. Thank
            you for your understanding and support!
          </p>
        </div>
      </div>
      <GeekvapeZCards />
    </main>
  );
}

export default GeekvapeZ;
