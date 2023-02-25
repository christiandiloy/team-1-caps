import React from "react";
import ObeliskCards from "./obelisk-cards";
import "./styles.css";

function Obelisk() {
  return (
    <main>
      <div
        className="article"
        style={{
          backgroundImage: `url("./assets/images/background/banner-obelisk.jpg")`,
        }}
      >
        <div>
          <h1 class="img-header">
            OBELISK SERIES - LIVE A TECH
            <br />
            LIFE.
          </h1>
        </div>
      </div>
      <ObeliskCards />
    </main>
  );
}

export default Obelisk;
