import React from "react";
import './styles.css'

function Embed() {
  return (
    <>
      <div class="row">
        <div class="col-18 col-md-12 col-parent">
            <a href="https://www.youtube.com/watch?v=Eft3PRdYeP0" className="container-embed">
            <img src="/assets/images/video/video-e100.jpg" alt="" className="embed-img"/>
                <i class="fa-solid fa-play"></i>
            </a>
        </div>
      </div>
    </>
  );
}

export default Embed;