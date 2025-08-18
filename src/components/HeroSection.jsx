// src/components/HeroSection.jsx
import React, { useEffect } from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.hero-content > *');
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.2}s`;
      el.classList.add('fade-up');
    });
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="white-text1">Our signature style, your perfect space</h1>
        <p className="white-text2">Crafting interiors that feel like home</p>
        <button className="cta-button">SEE MORE</button>
      </div>
    </section>
  );
};

export default HeroSection;