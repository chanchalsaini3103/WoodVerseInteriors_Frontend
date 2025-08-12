import React, { useEffect, useState, useRef } from "react";
import "../styles/EstimateSection.css";
import { FaCouch, FaUtensils, FaBoxOpen } from "react-icons/fa";

const EstimateSection = () => {
  const items = [
    {
      icon: <FaCouch size={40} color="#E74C3C" />,
      title: "Full Home Interior",
      description: "Know the estimate price for your full home interiors",
    },
    {
      icon: <FaUtensils size={40} color="#E74C3C" />,
      title: "Kitchen",
      description: "Get an approximate costing for your kitchen interior.",
    },
    {
      icon: <FaBoxOpen size={40} color="#E74C3C" />,
      title: "Wardrobe",
      description: "Our estimate for your dream wardrobe",
    },
  ];

  const words = ["Full Home", "Kitchen", "Wardrobe"];
  const [index, setIndex] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef(null);

  // Detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Change words only after animation starts
  useEffect(() => {
    if (!startAnimation) return;
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [startAnimation]);

  return (
    <section className="estimate-section" ref={sectionRef}>
      <h2 className="estimate-heading">
        Get the estimate for your{" "}
        <span
          key={index} // Forces re-animation on change
          className={`fade-text ${startAnimation ? "fade-in" : ""}`}
        >
          {words[index]}
        </span>
      </h2>
      <p className="estimate-subheading">
        Calculate the approximate cost of doing up your home interiors
      </p>
      <div className="estimate-cards">
        {items.map((item, index) => (
          <div
            className={`estimate-card ${startAnimation ? "slide-up" : ""}`}
            key={index}
          >
            <div className="icon-wrapper">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button className="calculate-btn">
              CALCULATE <span>→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EstimateSection;
