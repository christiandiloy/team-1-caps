import React from "react";
import "./styles.css";

import WenaxCards from "./wenax-cards";

function Wenax() {
  return (
    <main>
      <div
        className="article"
        style={{
          backgroundImage: `url("./assets/images/background/banner-wenax.jpg")`,
        }}
      >
        <div>
          <h1 class="img-header">
            WENAX SERIES – THE
            <br />
            LIGHTEST FLAVOR VAPE
          </h1>
        </div>
      </div>
      <WenaxCards />
    </main>
  );
}

export default Wenax;
