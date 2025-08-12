import React from "react";
import "../styles/InteriorGallery.css";

const InteriorGallery = () => {
  return (

    <>
    <div className="gallery-header">
        <h2 className="gallery-title">Discover Beautiful Interior Inspirations</h2>
        <button className="view-all-btn">View All</button>
      </div>
      <div className="gallery-container">
        
      {/* First Row: 3:1:1 */}
      <div className="gallery-row">
        <img src="/src/images/1.jpg" alt="Landscape" className="landscape" />
        <img src="/src/images/2.jpg" alt="Portrait" className="portrait" />
        <img src="/src/images/3.jpg" alt="Portrait" className="portrait" />
      </div>

      {/* Second Row: 1:3:1 */}
      <div className="gallery-row">
        <img src="/src/images/4.jpg" alt="Portrait" className="portrait" />
        <img src="/src/images/5.jpg" alt="Landscape" className="landscape" />
        <img src="/src/images/6.jpg" alt="Portrait" className="portrait" />
      </div>
    </div>
    </>
  
  );
};

export default InteriorGallery;
