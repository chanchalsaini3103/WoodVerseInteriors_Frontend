import React, { useEffect, useState } from "react";
import { 
  FaAward, 
  FaHome, 
  FaPalette, 
  FaInstagram, 
  FaPinterestP,
  FaFacebook,
  FaLinkedin,
  FaArrowRight,
  FaQuoteLeft,
  FaMapMarkerAlt,
  FaHandsHelping
} from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "../styles/AboutPage.css";

// Import images
import foundersImg from "../images/founders.jpg";
import teamAarav from "../images/founders.jpg";
import teamPriya from "../images/founders.jpg";
import aboutHero from "../images/founders.jpg";
import project1 from "../images/founders.jpg";
import project2 from "../images/founders.jpg";
import project3 from "../images/founders.jpg";

// Team Data
const teamMembers = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Founder & Creative Director",
    image: teamAarav,
    bio: "With 15 years in sustainable design, Aarav brings a global perspective from his work in London and Tokyo.",
    social: [
      { name: "instagram", url: "#", icon: <FaInstagram /> },
      { name: "pinterest", url: "#", icon: <FaPinterestP /> },
    ],
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Lead Architect",
    image: teamPriya,
    bio: "Specializing in spatial psychology, Priya creates environments that positively impact mental wellbeing.",
    social: [
      { name: "linkedin", url: "#", icon: <FaLinkedin /> },
      { name: "facebook", url: "#", icon: <FaFacebook /> },
    ],
  },
  {
    id: 3,
    name: "Rahul Mehta",
    role: "Head of Operations",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Ensuring seamless project execution with his engineering background and meticulous planning.",
    social: [
      { name: "linkedin", url: "#", icon: <FaLinkedin /> },
      { name: "facebook", url: "#", icon: <FaFacebook /> },
    ],
  },
];

// Testimonials Data
const testimonials = [
  {
    id: 1,
    quote: "WoodVerse transformed our apartment into a sanctuary. Their attention to natural light and flow is unmatched.",
    author: "Ananya Roy, Mumbai",
    project: "Seaside Apartment"
  },
  {
    id: 2,
    quote: "Working with their team was collaborative and inspiring. They listened to our needs while pushing creative boundaries.",
    author: "Vikram & Neha Singh, Delhi",
    project: "Heritage Home Restoration"
  },
  {
    id: 3,
    quote: "The commercial space they designed has improved our employee satisfaction and client impressions dramatically.",
    author: "TechStart Solutions",
    project: "Corporate Office"
  }
];

// Featured Projects
const featuredProjects = [
  {
    id: 1,
    title: "Urban Oasis",
    location: "Bangalore",
    type: "Residential",
    image: project1,
    description: "A compact city apartment transformed with vertical gardens and modular furniture"
  },
  {
    id: 2,
    title: "Heritage Revival",
    location: "Chennai",
    type: "Commercial",
    image: project2,
    description: "Restoration of a 1930s building with modern sustainability features"
  },
  {
    id: 3,
    title: "Minimalist Retreat",
    location: "Goa",
    type: "Vacation Home",
    image: project3,
    description: "Open-plan design blending indoor and outdoor living spaces"
  }
];

const AboutPage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeTeamMember, setActiveTeamMember] = useState(null);

  useEffect(() => {
    // Animate on scroll
    const elements = document.querySelectorAll(".animate");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            const animationType = entry.target.getAttribute('data-animate') || 'fadeIn';
            entry.target.style.animation = `${animationType} 0.8s forwards`;
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    // Auto-rotate testimonials
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(testimonialInterval);
  }, []);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="about-page">
      {/* Hero Section with Parallax Effect */}
      <section 
        className="about-hero"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="hero-content">
          <h1 className="animate" data-animate="fadeInDown">Crafting Spaces with Intention</h1>
          <p className="animate fadeIn delay-1">
            Where design meets the soul of your home
          </p>
          <div className="scroll-indicator animate fadeIn delay-2">
            <span></span>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="stats-container">
          <div className="stat animate" data-animate="fadeIn">
            <div className="stat-number">200+</div>
            <p className="stat-label">Projects Completed</p>
          </div>
          <div className="stat animate" data-animate="fadeIn delay-1">
            <div className="stat-number">30+</div>
            <p className="stat-label">Expert Team Members</p>
          </div>
          <div className="stat animate" data-animate="fadeIn delay-2">
            <div className="stat-number">15</div>
            <p className="stat-label">Design Awards</p>
          </div>
          <div className="stat animate" data-animate="fadeIn delay-3">
            <div className="stat-number">100%</div>
            <p className="stat-label">Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="text-content animate" data-animate="fadeInLeft">
              <h2>Our Story</h2>
              <p className="lead">
                Founded in 2015, WoodVerse Interiors began as a passion project
                between two design school graduates who believed interiors
                should tell a story.
              </p>
              <p>
                Today, we're a collective of 30+ designers, architects, and craftsmen 
                united by one philosophy: <em>spaces should inspire.</em> From Mumbai 
                to New York, we've transformed over 200 homes and commercial spaces, 
                each reflecting the unique personality of its inhabitants.
              </p>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-year">2015</div>
                  <div className="timeline-content">
                    <h5>Founded in Mumbai</h5>
                    <p>Started with residential projects in South Mumbai</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2018</div>
                  <div className="timeline-content">
                    <h5>First Commercial Project</h5>
                    <p>Designed award-winning café in Bandra</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2022</div>
                  <div className="timeline-content">
                    <h5>International Expansion</h5>
                    <p>Opened studio in Singapore</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-content animate" data-animate="fadeInRight">
              <div className="image-wrapper">
                <img
                  src={foundersImg}
                  alt="WoodVerse founders"
                  className="founders-img"
                />
                <div className="experience-badge">
                  <span className="years">9+</span>
                  <small>Years of design excellence</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="design-philosophy">
        <div className="container">
          <h2 className="section-title animate" data-animate="fadeIn">
            Our Design Principles
          </h2>
          <div className="principles-grid">
            <div className="principle-card animate" data-animate="fadeInUp">
              <div className="icon-wrapper">
                <FaHome className="principle-icon" />
              </div>
              <h3>Contextual Design</h3>
              <p>
                We honor architectural heritage while infusing modern
                functionality, creating spaces rooted in their environment.
              </p>
              <ul className="principle-details">
                <li>Site-specific solutions</li>
                <li>Cultural sensitivity</li>
                <li>Climate-responsive</li>
              </ul>
            </div>
            <div className="principle-card animate" data-animate="fadeInUp delay-1">
              <div className="icon-wrapper">
                <FaPalette className="principle-icon" />
              </div>
              <h3>Material Poetry</h3>
              <p>
                From reclaimed wood to handwoven textiles, every material is
                chosen for its narrative and tactile quality.
              </p>
              <ul className="principle-details">
                <li>Sustainable sourcing</li>
                <li>Artisan collaborations</li>
                <li>Tactile experiences</li>
              </ul>
            </div>
            <div className="principle-card animate" data-animate="fadeInUp delay-2">
              <div className="icon-wrapper">
                <FaAward className="principle-icon" />
              </div>
              <h3>Craftsmanship First</h3>
              <p>
                We collaborate with master artisans to ensure every detail
                reflects unparalleled skill and attention.
              </p>
              <ul className="principle-details">
                <li>Traditional techniques</li>
                <li>Precision detailing</li>
                <li>Quality assurance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="design-process">
        <div className="container">
          <h2 className="section-title animate" data-animate="fadeIn">
            Our Design Process
          </h2>
          <div className="process-steps">
            <div className="process-step animate" data-animate="fadeInRight">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Discovery</h3>
                <p>Deep-dive into your lifestyle, needs and aspirations</p>
              </div>
            </div>
            <div className="process-step animate" data-animate="fadeInRight delay-1">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Concept Development</h3>
                <p>Creating mood boards and spatial concepts</p>
              </div>
            </div>
            <div className="process-step animate" data-animate="fadeInRight delay-2">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Design Refinement</h3>
                <p>Detailed drawings, material selections and 3D visualizations</p>
              </div>
            </div>
            <div className="process-step animate" data-animate="fadeInRight delay-3">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Execution</h3>
                <p>Overseeing construction with our network of skilled craftsmen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Showcase */}
      <section className="meet-team">
        <div className="container">
          <h2 className="section-title animate" data-animate="fadeIn">
            The Minds Behind WoodVerse
          </h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div
                className={`team-card animate`}
                data-animate={`fadeInUp delay-${index}`}
                key={member.id}
                onMouseEnter={() => setActiveTeamMember(member.id)}
                onMouseLeave={() => setActiveTeamMember(null)}
              >
                <div className={`team-card-inner ${activeTeamMember === member.id ? 'active' : ''}`}>
                  <div className="team-img-container">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-img"
                    />
                    {activeTeamMember === member.id && (
                      <div className="team-bio">
                        <p>{member.bio}</p>
                      </div>
                    )}
                  </div>
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <div className="social-links">
                    {member.social.map((platform) => (
                      <a
                        key={platform.name}
                        href={platform.url}
                        aria-label={`${member.name}'s ${platform.name}`}
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {platform.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects">
        <div className="container">
          <h2 className="section-title animate" data-animate="fadeIn">
            Signature Projects
          </h2>
          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <div 
                className="project-card animate" 
                data-animate={`fadeInUp delay-${index}`}
                key={project.id}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} className="project-img" />
                  <div className="project-overlay">
                    <div className="project-info">
                      <h3>{project.title}</h3>
                      <p className="location">
                        <FaMapMarkerAlt className="icon" />
                        {project.location}
                      </p>
                      <p className="type">{project.type}</p>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <p>{project.description}</p>
                  <button className="btn btn-outline">
                    View Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title animate" data-animate="fadeIn">
            Client Experiences
          </h2>
          <div className="testimonial-slider animate" data-animate="fadeIn">
            <div className="testimonial-content">
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-quote">{testimonials[activeTestimonial].quote}</p>
              <div className="author-info">
                <h5 className="author-name">{testimonials[activeTestimonial].author}</h5>
                <small className="project-name">{testimonials[activeTestimonial].project}</small>
              </div>
            </div>
            <div className="testimonial-controls">
              <button 
                className="btn-prev" 
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <FiChevronLeft />
              </button>
              <div className="indicators">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === activeTestimonial ? 'active' : ''}`}
                    onClick={() => setActiveTestimonial(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
              <button 
                className="btn-next" 
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="community">
        <div className="container">
          <div className="community-content">
            <div className="community-text animate" data-animate="fadeInLeft">
              <h2>Beyond Design</h2>
              <p className="lead">
                We believe in giving back to the communities that inspire us.
              </p>
              <p>
                Through our <strong>Design for Good</strong> initiative, we dedicate 
                10% of our resources to pro-bono projects that make design 
                accessible to underserved communities.
              </p>
              <div className="initiatives">
                <div className="initiative">
                  <div className="icon-wrapper">
                    <FaHandsHelping />
                  </div>
                  <div className="initiative-content">
                    <h5>Community Centers</h5>
                    <p>Transforming public spaces in urban neighborhoods</p>
                  </div>
                </div>
                <div className="initiative">
                  <div className="icon-wrapper">
                    <FaHandsHelping />
                  </div>
                  <div className="initiative-content">
                    <h5>Design Education</h5>
                    <p>Scholarships and workshops for aspiring designers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="community-image animate" data-animate="fadeInRight">
              <div className="image-container">
                <img 
                  src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Community project" 
                  className="community-img" 
                />
                <div className="community-badge">
                  <h4 className="badge-number">500+</h4>
                  <p className="badge-text">Lives impacted through our initiatives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container animate" data-animate="zoomIn">
          <h2>Ready to Begin Your Design Journey?</h2>
          <p className="cta-subtitle">
            Schedule a free 30-minute consultation with our team to discuss your 
            project vision and how we can bring it to life.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary">
              Book a Consultation <FaArrowRight className="icon" />
            </button>
            <button className="btn btn-outline">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;