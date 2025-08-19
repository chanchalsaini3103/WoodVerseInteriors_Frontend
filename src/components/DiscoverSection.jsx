import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/DiscoverSection.css';
import Footer2 from './Footer2';

// Project images (replace paths with your actual files)
import loftTransformation from '../images/projects/loft-transformation.jpg';
import officeSuite from '../images/projects/office-suite.jpg';
import lakesideRetreat from '../images/projects/lakeside-retreat.jpg';
import hotelLobby from '../images/projects/hotel-lobby.jpg';
import farmhouseKitchen from '../images/projects/farmhouse-kitchen.jpg';
import techHQ from '../images/projects/tech-hq.jpg';
import penthouse from '../images/projects/penthouse.jpg';
import restaurant from '../images/projects/restaurant.jpg';

// Design process + client images (replace as needed)
import designProcess from '../images/projects/design-process.jpg';
import client1 from '../images/team/1.jpeg';
import client2 from '../images/team/3.jpeg';
import client3 from '../images/team/2.jpeg';

const DiscoverSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    { id: 1, title: 'Urban Loft Transformation', category: 'residential', location: 'New York, NY', year: '2023', image: loftTransformation, featured: true },
    { id: 2, title: 'Executive Office Suite', category: 'commercial', location: 'Boston, MA', year: '2023', image: officeSuite, featured: true },
    { id: 3, title: 'Lakeside Retreat', category: 'residential', location: 'Lake Tahoe, CA', year: '2022', image: lakesideRetreat },
    { id: 4, title: 'Boutique Hotel Lobby', category: 'hospitality', location: 'Miami, FL', year: '2022', image: hotelLobby },
    { id: 5, title: 'Modern Farmhouse Kitchen', category: 'residential', location: 'Austin, TX', year: '2022', image: farmhouseKitchen },
    { id: 6, title: 'Tech Startup Headquarters', category: 'commercial', location: 'San Francisco, CA', year: '2021', image: techHQ },
    { id: 7, title: 'Penthouse Apartment', category: 'residential', location: 'Chicago, IL', year: '2021', image: penthouse },
    { id: 8, title: 'Restaurant Interior', category: 'hospitality', location: 'Seattle, WA', year: '2020', image: restaurant },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <>
      <div className="discover-container">
        {/* Hero */}
        <section className="discover-hero">
          <div className="discover-hero-content">
            <h1>Discover MH Interiors</h1>
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

        {/* Portfolio */}
        <section className="portfolio-section">
          <div className="section-header">
            <h2>Our Portfolio</h2>
            <div className="portfolio-filters">
              {['all','residential','commercial','hospitality'].map(f => (
                <button
                  key={f}
                  className={activeFilter === f ? 'active' : ''}
                  onClick={() => setActiveFilter(f)}
                >
                  {f === 'all' ? 'All Projects' : f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
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
                    View Project <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section className="philosophy-section">
          <div className="philosophy-content">
            <div className="philosophy-text">
              <h2>Our Design Approach</h2>
              <p className="lead">
                At MH Interiors, we believe wood is not just a material—it’s the soul of a space.
              </p>
              <p>
                We start by understanding the character of each wood species. Then we blend
                traditional craftsmanship with innovative techniques to create timeless, contemporary spaces.
              </p>
              <div className="philosophy-points">
                <div className="point">
                  <i className="fas fa-tree" />
                  <h4>Sustainable Sourcing</h4>
                  <p>We work with ethical suppliers committed to responsible forestry.</p>
                </div>
                <div className="point">
                  <i className="fas fa-ruler-combined" />
                  <h4>Precision Craftsmanship</h4>
                  <p>Every joint, curve, and finish is executed with care.</p>
                </div>
                <div className="point">
                  <i className="fas fa-lightbulb" />
                  <h4>Innovative Solutions</h4>
                  <p>We push boundaries while honoring the material’s beauty.</p>
                </div>
              </div>
            </div>
            <div className="philosophy-image">
              <img src={designProcess} alt="Our design process" />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section">
          <h2>Client Experiences</h2>
          <p className="section-subtitle">What our clients say about working with us</p>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <i className="fas fa-quote-left" />
                <p>
                  MH Interiors transformed our downtown loft with custom walnut cabinetry
                  and flooring. The attention to detail is extraordinary.
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
                <i className="fas fa-quote-left" />
                <p>
                  Our restaurant’s ambiance was elevated by their wood installations.
                  They delivered beyond expectations.
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
                <i className="fas fa-quote-left" />
                <p>
                  The custom office furniture is the talk of our company—functional and beautiful.
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

        {/* CTA */}
        <section className="discover-cta">
          <div className="cta-content">
            <h2>Ready to Begin Your Project?</h2>
            <p>Book a consultation and let’s bring the beauty of wood into your space.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">Book a Consultation</Link>
              <Link to="/portfolio" className="cta-button secondary">View Full Portfolio</Link>
            </div>
          </div>
        </section>
      </div>
      <Footer2 />
    </>
  );
};

export default DiscoverSection;
