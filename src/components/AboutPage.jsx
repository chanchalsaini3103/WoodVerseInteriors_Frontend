import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AboutPage.css'; 
import Footer2 from './Footer2';
import workshopImg from '../images/workshop.jpg'; // adjust path as needed
import papa from '../images/team/1.jpeg'; // adjust path as needed
import deepak from '../images/team/3.jpeg'; // adjust path as needed
import kiran from '../images/team/2.jpeg'; // adjust path as needed
const AboutPage = () => {
  return (
    <>
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay">
          <h1>Crafting Timeless Spaces</h1>
          <p>Where wood meets vision to create your perfect interior</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <div className="story-content">
          <h2>Our Story</h2>
          <p className="lead-text">
            Founded in 2000, MH Interiors began as a small woodworking shop with a passion for 
            transforming raw materials into functional art.
          </p>
          <p>
            Today, we've grown into a premier interior design firm specializing in bespoke wooden 
            interiors, combining traditional craftsmanship with contemporary design. Our journey has 
            been shaped by hundreds of satisfied clients and countless hours perfecting our craft.
          </p>
          <div className="milestones">
            <div className="milestone">
              <span className="number">500+</span>
              <span className="label">Projects Completed</span>
            </div>
            <div className="milestone">
              <span className="number">15</span>
              <span className="label">Awards Won</span>
            </div>
            <div className="milestone">
              <span className="number">100%</span>
              <span className="label">Client Satisfaction</span>
            </div>
          </div>
        </div>
        <div className="story-image">
          <img src={workshopImg} alt="Our workshop" />
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="our-philosophy">
        <h2>Our Design Philosophy</h2>
        <div className="philosophy-grid">
          <div className="philosophy-card">
            <div className="icon-box">
              <i className="icon-nature"></i>
            </div>
            <h3>Sustainable Materials</h3>
            <p>
              We source only ethically harvested wood and use eco-friendly finishes to ensure 
              our designs are as kind to the environment as they are beautiful.
            </p>
          </div>
          <div className="philosophy-card">
            <div className="icon-box">
              <i className="icon-craft"></i>
            </div>
            <h3>Artisan Craftsmanship</h3>
            <p>
              Each piece is handcrafted by our master woodworkers who combine modern techniques 
              with time-honored traditions.
            </p>
          </div>
          <div className="philosophy-card">
            <div className="icon-box">
              <i className="icon-design"></i>
            </div>
            <h3>Bespoke Design</h3>
            <p>
              We don't believe in one-size-fits-all solutions. Every project is uniquely tailored 
              to reflect our clients' personalities and lifestyles.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="meet-team">
        <h2>Meet The Master Craftsmen</h2>
        <p className="team-subtitle">
          Our team of designers and woodworking artisans bring decades of combined experience to every project.
        </p>
        <div className="team-grid">
          <div className="team-member">
             <img src={papa} alt="Our workshop" />
            <h3>Mohanlal Suthar</h3>
            <p className="position">Founder & Lead Designer</p>
            <p className="bio">
              With over 25 years in woodworking, Michael's vision drives the aesthetic direction of MH Interiors.
            </p>
          </div>
          <div className="team-member">
             <img src={deepak} alt="Our workshop" />
            <h3>Deepak Suthar</h3>
            <p className="position">Head of Sustainable Design</p>
            <p className="bio">
              Sarah ensures our materials and processes meet the highest environmental standards.
            </p>
          </div>
          <div className="team-member">
            <img src={kiran} alt="Our workshop" />
            <h3>Kiran Suthar</h3>
            <p className="position">Master Woodworker</p>
            <p className="bio">
              A third-generation carpenter, Carlos brings traditional techniques to our modern designs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="cta-content">
          <h2>Ready to Transform Your Space?</h2>
          <p>
            Let's discuss how we can bring warmth, elegance, and functionality to your home or office 
            through the beauty of wood.
          </p>
          <Link to="/contact" className="cta-button">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
    <Footer2 />
    </>
  );
};

export default AboutPage;