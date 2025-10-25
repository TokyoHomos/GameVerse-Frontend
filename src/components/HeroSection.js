import React from "react";
import "../styles/HeroSection.css";

export default function HeroSection() {
  return (
    <div className="HeroSection">
      <div className="coutainer">
        <div className="title-section">
          <article>Ghost of Yotai</article>
        </div>
        <div className="description-section">
          <p>
            Step into the shadows where legends roam. Uncover the secrets of Yotai
            and face the ghostly challenges that await beyond the veil.
          </p>
          <button className="explore-btn">Explore More</button>
        </div>
      </div>
    </div>
  );
}
