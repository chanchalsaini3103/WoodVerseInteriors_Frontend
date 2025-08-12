import React, { useEffect, useRef } from "react";
import "../styles/CustomerReviews.css";

// Import images
import storyImg from "../images/1.jpg";
import coupleImg from "../images/5.jpg";

const CustomerReviews = () => {
  const reviewRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    reviewRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      reviewRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="reviews-section">
      {/* First Row */}
      <div 
        className="review-row" 
        ref={el => reviewRefs.current[0] = el}
      >
        <div className="review-image">
          <img src={storyImg} alt="Customer Story" />
        </div>
        <div className="review-text">
          <h2>
            Don't Believe us, Hear what our customers have to say about their experience with us
          </h2>
          <p>
            "We had 90% fixed another design company, but one of our family friends convinced us 
            to take a look at Bonito Designs..."
          </p>
          <a href="#">Read More +</a>
        </div>
      </div>

      {/* Second Row */}
      <div 
        className="review-row reverse" 
        ref={el => reviewRefs.current[1] = el}
      >
        <div className="review-image">
          <img src={coupleImg} alt="Happy Customers" />
        </div>
        <div className="review-text">
          <h2>
            Capturing Moments of Delight, Our Happy Customers, Our Greatest Achievement!
          </h2>
          <p>
            "We were searching for somebody whom we can trust, the design & quality of the 
            material that was being used was exactly what we wanted..."
          </p>
          <a href="#">Read More +</a>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;