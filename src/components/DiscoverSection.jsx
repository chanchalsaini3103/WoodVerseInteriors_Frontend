import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/DiscoverSection.css';

// Project images
import loftTransformation from '../images/projects/loft-transformation.jpg';
import officeSuite from '../images/projects/office-suite.jpg';
import lakesideRetreat from '../images/projects/loft-transformation.jpg';
import hotelLobby from '../images/projects/loft-transformation.jpg';
import farmhouseKitchen from '../images/projects/loft-transformation.jpg';
import techHQ from '../images/projects/loft-transformation.jpg';
import penthouse from '../images/projects/loft-transformation.jpg';
import restaurant from '../images/projects/loft-transformation.jpg';

// Design process image
import designProcess from '../images/projects/loft-transformation.jpg';

// Client images
import client1 from '../images/projects/loft-transformation.jpg';
import client2 from '../images/projects/loft-transformation.jpg';
import client3 from '../images/projects/loft-transformation.jpg';
import Footer2 from './Footer2';

const DiscoverSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "Urban Loft Transformation",
      category: "residential",
      location: "New York, NY",
      year: "2023",
      image: loftTransformation,
      featured: true
    },
    {
      id: 2,
      title: "Executive Office Suite",
      category: "commercial",
      location: "Boston, MA",
      year: "2023",
      image: officeSuite,
      featured: true
    },
    {
      id: 3,
      title: "Lakeside Retreat",
      category: "residential",
      location: "Lake Tahoe, CA",
      year: "2022",
      image: lakesideRetreat
    },
    {
      id: 4,
      title: "Boutique Hotel Lobby",
      category: "hospitality",
      location: "Miami, FL",
      year: "2022",
      image: hotelLobby
    },
    {
      id: 5,
      title: "Modern Farmhouse Kitchen",
      category: "residential",
      location: "Austin, TX",
      year: "2022",
      image: farmhouseKitchen
    },
    {
      id: 6,
      title: "Tech Startup Headquarters",
      category: "commercial",
      location: "San Francisco, CA",
      year: "2021",
      image: techHQ
    },
    {
      id: 7,
      title: "Penthouse Apartment",
      category: "residential",
      location: "Chicago, IL",
      year: "2021",
      image: penthouse
    },
    {
      id: 8,
      title: "Restaurant Interior",
      category: "hospitality",
      location: "Seattle, WA",
      year: "2020",
      image: restaurant
    }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  // Featured projects (for the hero section)
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <>
    <div className="discover-container">
      {/* Hero Section */}
      <section className="discover-hero">
        <div className="hero-content">
          <h1>Discover MT Woodverse</h1>
          <p>Explore our portfolio of exquisite wood-centric interior designs</p>
        </div>
        <div className="featured-projects">
          {featuredProjects.map(project => (
            <div className="featured-project" key={project.id}>
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.location} • {project.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section">
        <div className="section-header">
          <h2>Our Portfolio</h2>
          <div className="portfolio-filters">
            <button 
              className={activeFilter === 'all' ? 'active' : ''}
              onClick={() => setActiveFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={activeFilter === 'residential' ? 'active' : ''}
              onClick={() => setActiveFilter('residential')}
            >
              Residential
            </button>
            <button 
              className={activeFilter === 'commercial' ? 'active' : ''}
              onClick={() => setActiveFilter('commercial')}
            >
              Commercial
            </button>
            <button 
              className={activeFilter === 'hospitality' ? 'active' : ''}
              onClick={() => setActiveFilter('hospitality')}
            >
              Hospitality
            </button>
          </div>
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div className="portfolio-item" key={project.id}>
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="category-badge">{project.category}</div>
              </div>
              <div className="portfolio-info">
                <h3>{project.title}</h3>
                <div className="project-meta">
                  <span>{project.location}</span>
                  <span>{project.year}</span>
                </div>
                <Link to={`/projects/${project.id}`} className="view-project">
                  View Project <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Design Philosophy Section */}
      <section className="philosophy-section">
        <div className="philosophy-content">
          <div className="philosophy-text">
            <h2>Our Design Approach</h2>
            <p className="lead">
              At MT Woodverse, we believe wood is not just a material—it's the soul of a space.
            </p>
            <p>
              Our process begins with understanding the unique characteristics of each wood species 
              and how they can enhance your environment. We combine traditional craftsmanship with 
              innovative techniques to create spaces that are both timeless and contemporary.
            </p>
            <div className="philosophy-points">
              <div className="point">
                <i className="fas fa-tree"></i>
                <h4>Sustainable Sourcing</h4>
                <p>We partner with ethical suppliers who share our commitment to responsible forestry.</p>
              </div>
              <div className="point">
                <i className="fas fa-ruler-combined"></i>
                <h4>Precision Craftsmanship</h4>
                <p>Every joint, curve, and finish is executed with meticulous attention to detail.</p>
              </div>
              <div className="point">
                <i className="fas fa-lightbulb"></i>
                <h4>Innovative Solutions</h4>
                <p>We push boundaries while respecting the natural beauty of our materials.</p>
              </div>
            </div>
          </div>
          <div className="philosophy-image">
            <img src={designProcess} alt="Our design process" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>Client Experiences</h2>
        <p className="section-subtitle">What our clients say about working with us</p>
        
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <i className="fas fa-quote-left"></i>
              <p>
                MT Woodverse transformed our downtown loft with their custom walnut cabinetry 
                and flooring. The attention to detail is extraordinary—we couldn't be happier.
              </p>
            </div>
            <div className="client-info">
              <img src={client1} alt="Sarah Johnson" />
              <div>
                <h4>Sarah Johnson</h4>
                <p>Loft Residence, NYC</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-content">
              <i className="fas fa-quote-left"></i>
              <p>
                Our restaurant's ambiance was completely elevated by their wood installations. 
                They understood our vision perfectly and delivered beyond expectations.
              </p>
            </div>
            <div className="client-info">
              <img src={client2} alt="Michael Chen" />
              <div>
                <h4>Michael Chen</h4>
                <p>Bistro 45, Seattle</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-content">
              <i className="fas fa-quote-left"></i>
              <p>
                The custom office furniture they created has become the talk of our company. 
                Functional, beautiful, and exactly what we needed to impress clients.
              </p>
            </div>
            <div className="client-info">
              <img src={client3} alt="David Rodriguez" />
              <div>
                <h4>David Rodriguez</h4>
                <p>Tech Startup CEO, SF</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="discover-cta">
        <div className="cta-content">
          <h2>Ready to Begin Your Project?</h2>
          <p>
            Schedule a consultation with our design team to discuss how we can bring 
            the beauty of wood into your space.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button primary">
              Book a Consultation
            </Link>
            <Link to="/portfolio" className="cta-button secondary">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
    <Footer2 />
    </>
  );
};

export default DiscoverSection;
