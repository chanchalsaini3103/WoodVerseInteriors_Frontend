import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ContactUs.css';
import Footer2 from './Footer2';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: ''
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
    <div className="contact-us-container">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay">
          <h1>Let's Create Something Beautiful</h1>
          <p>Our design team is ready to bring your vision to life</p>
        </div>
      </section>

      {/* Main Contact Content */}
      <div className="contact-content">
        {/* Contact Form Section */}
        <section className="contact-form-section">
          <h2>Get In Touch</h2>
          <p className="form-intro">
            Complete the form below and our design consultant will contact you within 24 hours 
            to discuss your project.
          </p>

          {submitted && (
            <div className="success-message">
              <i className="fas fa-check-circle"></i>
              <p>Thank you for your inquiry! We'll contact you shortly.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="projectType">Project Type*</label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="">Select Project Type</option>
                <option value="residential">Residential Interior</option>
                <option value="commercial">Commercial Space</option>
                <option value="kitchen">Kitchen Design</option>
                <option value="wardrobe">Custom Wardrobes</option>
                <option value="furniture">Bespoke Furniture</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Tell Us About Your Project*</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit Inquiry
            </button>
          </form>
        </section>

        {/* Contact Info Section */}
        <section className="contact-info-section">
          <div className="info-card">
            <h3>Contact Information</h3>
            
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Visit Our Showroom</h4>
                <p>123 Design Avenue<br />Woodland District<br />New York, NY 10001</p>
              </div>
            </div>

            <div className="info-item">
              <i className="fas fa-phone-alt"></i>
              <div>
                <h4>Call Us</h4>
                <p>+1 (212) 555-0187<br />Mon-Fri: 9am-6pm EST</p>
              </div>
            </div>

            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email Us</h4>
                <p>info@mtwoodverse.com<br />consultation@mtwoodverse.com</p>
              </div>
            </div>

            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                <a href="#"><i className="fab fa-houzz"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>

          <div className="map-container">
            <iframe 
              title="MT Woodverse Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2152091793237!2d-73.98784492452558!3d40.74844097138959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629780000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy">
            </iframe>
          </div>
        </section>
      </div>

      {/* Consultation CTA */}
      <section className="consultation-cta">
        <div className="cta-content">
          <h2>Schedule a Personal Consultation</h2>
          <p>
            Experience the MT Woodverse difference with a complimentary 30-minute design consultation 
            at our showroom or virtually.
          </p>
          <Link to="/appointment" className="cta-button">
            Book Now
          </Link>
        </div>
      </section>
    </div>
    <Footer2 />
    </>
  );
};

export default ContactUs;