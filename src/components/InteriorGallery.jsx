import React from "react";
import "../styles/InteriorGallery.css";

// Import images
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";

const InteriorGallery = () => {
  return (
    <>
      <div className="gallery-header">
        <h2 className="gallery-title">Discover Beautiful Interior Inspirations</h2>
        <button className="view-all-btn">View All</button>
      </div>

      <div className="gallery-container">
        {/* First Row */}
        <div className="gallery-row">
          <img src={img1} alt="Landscape" className="landscape" />
          <img src={img2} alt="Portrait" className="portrait" />
          <img src={img3} alt="Portrait" className="portrait" />
        </div>

        {/* Second Row */}
        <div className="gallery-row">
          <img src={img4} alt="Portrait" className="portrait" />
          <img src={img5} alt="Landscape" className="landscape" />
          <img src={img6} alt="Portrait" className="portrait" />
        </div>
      </div>
    </>
  );
};

export default InteriorGallery;
