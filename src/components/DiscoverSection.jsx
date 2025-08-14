import React from "react";
import "../styles/DiscoverSection.css";

const DiscoverSection = () => {
  return (
    <section className="discover-section">
      {/* Main Content */}
      <div className="discover-container">
        {/* Left: Branding */}
        <div className="discover-branding">
          <div className="brand-logo">
            <span className="brand-main">WOODVERSE</span>
            <span className="brand-sub">DISCOVER</span>
          </div>
          <div className="brand-line"></div>
        </div>

        {/* Right: Content */}
        <div className="discover-content">
          <h2 className="discover-headline">
            Unveiling the Art of Thoughtful Interior Design
          </h2>
          <p className="discover-description">
            At WoodVerse, we believe interior design transcends mere decoration - 
            it's about crafting spaces that tell your unique story. Our Discover 
            platform reveals the philosophy behind meaningful design.
          </p>
          <div className="design-principles">
            <div className="principle">
              <div className="principle-icon">✧</div>
              <h3>Harmony</h3>
              <p>Creating balanced, cohesive spaces</p>
            </div>
            <div className="principle">
              <div className="principle-icon">✧</div>
              <h3>Authenticity</h3>
              <p>Designs that reflect true identity</p>
            </div>
            <div className="principle">
              <div className="principle-icon">✧</div>
              <h3>Innovation</h3>
              <p>Pushing creative boundaries</p>
            </div>
          </div>
          <a href="#explore" className="explore-btn">
            Explore Our Philosophy →
          </a>
        </div>
      </div>

      {/* Visual Showcase */}
      <div className="design-showcase">
        <div className="showcase-item">
          <div className="showcase-img img-1"></div>
          <p>Material Studies</p>
        </div>
        <div className="showcase-item">
          <div className="showcase-img img-2"></div>
          <p>Space Narratives</p>
        </div>
        <div className="showcase-item">
          <div className="showcase-img img-3"></div>
          <p>Light & Shadow</p>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;