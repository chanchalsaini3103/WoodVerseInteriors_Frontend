import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Services from "./components/Services";
import InteriorGallery from "./components/InteriorGallery";
import EstimateSection from "./components/EstimateSection";
import Footer from "./components/Footer";
import CustomerReviews from "./components/CustomerReviews";
import DiscoverSection from "./components/DiscoverSection";
import Portfolio from "./components/Portfolio";
import AboutPage from "./components/AboutPage";


const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-bg"></div>
    <div className="hero-content">
      <h1 className="fade-up delay-1">
        Our signature style, your perfect space
      </h1>
      <p className="fade-up delay-2">Crafting interiors that feel like home</p>
      <button className="cta-button fade-up delay-3">SEE MORE</button>
    </div>
  </section>
);

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home Page with Hero */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Services />
              <InteriorGallery />
              <EstimateSection />
              <CustomerReviews />
              <Footer />
            </>
          }
        />

        {/* Discover Page - No Hero */}
        <Route
          path="/discover"
          element={
            <>
              <DiscoverSection />
            </>
          }
        />
        
     <Route
          path="/read"
          element={
            <>
              <Portfolio />
            </>
          }
        />
         <Route
          path="/about-us"
          element={
            <>
              <AboutPage />
            </>
          }
        />
        
      </Routes>
    </>
  );
};

export default App;
