import React from "react";
import { 
  FaAward, 
  FaHome, 
  FaPalette, 
  FaInstagram, 
  FaPinterestP,
  FaFacebook,
  FaLinkedin 
} from "react-icons/fa";
import "../styles/AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>Crafting Spaces with Intention</h1>
          <p>Where design meets the soul of your home</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="our-story">
        <div className="story-content">
          <h2>Our Story</h2>
          <div className="story-grid">
            <div className="story-text">
              <p>
                Founded in 2015, WoodVerse Interiors began as a passion project 
                between two design school graduates who believed interiors should 
                tell a story. Today, we're a collective of 30+ designers, 
                architects, and craftsmen united by one philosophy: 
                <em> spaces should inspire.</em>
              </p>
              <p>
                From Mumbai to New York, we've transformed over 200 homes and 
                commercial spaces, each reflecting the unique personality of its 
                inhabitants.
              </p>
            </div>
            <div className="story-image">
              <img 
                src="/images/founders.jpg" 
                alt="WoodVerse founders" 
                className="founders-img"
              />
              <div className="experience-badge">
                <span>9+ Years</span>
                <small>of design excellence</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="design-philosophy">
        <h2>Our Design Principles</h2>
        <div className="principles-grid">
          <div className="principle-card">
            <FaHome className="principle-icon" />
            <h3>Contextual Design</h3>
            <p>
              We honor architectural heritage while infusing modern functionality, 
              creating spaces rooted in their environment.
            </p>
          </div>
          <div className="principle-card">
            <FaPalette className="principle-icon" />
            <h3>Material Poetry</h3>
            <p>
              From reclaimed wood to handwoven textiles, every material is chosen 
              for its narrative and tactile quality.
            </p>
          </div>
          <div className="principle-card">
            <FaAward className="principle-icon" />
            <h3>Craftsmanship First</h3>
            <p>
              We collaborate with master artisans to ensure every detail reflects 
              unparalleled skill and attention.
            </p>
          </div>
        </div>
      </section>

      {/* Team Showcase */}
      <section className="meet-team">
        <h2>The Minds Behind WoodVerse</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className="social-links">
                {member.social.map((platform) => (
                  <a 
                    key={platform.name} 
                    href={platform.url}
                    aria-label={`${member.name}'s ${platform.name}`}
                  >
                    {platform.icon}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2>Ready to Begin Your Design Journey?</h2>
        <button className="cta-button">Book a Consultation</button>
      </section>
    </div>
  );
};

// Sample team data
const teamMembers = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Founder & Creative Director",
    image: "/images/team-aarav.jpg",
    social: [
      { name: "instagram", url: "#", icon: <FaInstagram /> },
      { name: "pinterest", url: "#", icon: <FaPinterestP /> }
    ]
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Lead Architect",
    image: "/images/team-priya.jpg",
    social: [
      { name: "linkedin", url: "#", icon: <FaLinkedin /> },
      { name: "facebook", url: "#", icon: <FaFacebook /> }
    ]
  }
];

export default AboutPage;