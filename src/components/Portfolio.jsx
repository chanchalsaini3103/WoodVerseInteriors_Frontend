import React, { useState, useEffect } from "react";
import { FaSearch, FaExpand, FaHeart, FaTimes } from "react-icons/fa";
import "../styles/Portfolio.css";

// Import portfolio images
// import project1 from "../images/portfolio/project1.jpg";
// import project2 from "../images/portfolio/project2.jpg";
// import project3 from "../images/portfolio/project3.jpg";
// import project4 from "../images/portfolio/project4.jpg";
// import project5 from "../images/portfolio/project5.jpg";
// import project6 from "../images/portfolio/project6.jpg";

import project1 from "../images/og/1.jpeg";
import project2 from "../images/og/9.jpeg";
import project3 from "../images/og/3.jpeg";
import project4 from "../images/og/4.jpeg";
import project5 from "../images/og/5.jpeg";
import project6 from "../images/og/6.jpeg";
import Footer2 from "./Footer2";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Portfolio data
  const portfolioItems = [
    {
      id: 1,
      title: "Serene Living Room",
      category: "residential",
      image: project1,
      location: "Mumbai",
      description:
        "A tranquil living space designed with natural materials and soft lighting.",
      year: "2023",
      size: "450 sq.ft",
      likes: 124,
    },
    {
      id: 2,
      title: "Minimalist Office Space",
      category: "commercial",
      image: project2,
      location: "Delhi",
      description:
        "Clean lines and open spaces define this productive work environment.",
      year: "2022",
      size: "1200 sq.ft",
      likes: 89,
    },
    {
      id: 3,
      title: "Luxury Penthouse",
      category: "residential",
      image: project3,
      location: "Bangalore",
      description:
        "Top-floor residence featuring panoramic views and premium finishes.",
      year: "2023",
      size: "3200 sq.ft",
      likes: 215,
    },
    {
      id: 4,
      title: "Boutique Hotel Lobby",
      category: "hospitality",
      image: project4,
      location: "Goa",
      description:
        "An inviting entrance space blending local craftsmanship with modern design.",
      year: "2021",
      size: "1800 sq.ft",
      likes: 156,
    },
    {
      id: 5,
      title: "Modern Kitchen Design",
      category: "residential",
      image: project5,
      location: "Hyderabad",
      description: "State-of-the-art kitchen with smart storage solutions.",
      year: "2022",
      size: "300 sq.ft",
      likes: 178,
    },
    {
      id: 6,
      title: "Co-Working Space",
      category: "commercial",
      image: project6,
      location: "Pune",
      description: "Flexible work environment with varied seating options.",
      year: "2023",
      size: "5000 sq.ft",
      likes: 92,
    },
  ];

  // Filter projects
  useEffect(() => {
    if (filter === "all") {
      setProjects(portfolioItems);
    } else {
      setProjects(portfolioItems.filter((item) => item.category === filter));
    }
  }, [filter]);

  // Handle project selection
  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  // Handle like button
  const handleLike = (id) => {
    setProjects(
      projects.map((project) =>
        project.id === id ? { ...project, likes: project.likes + 1 } : project
      )
    );
  };

  return (
    <>
      <section className="portfolio py-5 bg-light">
        <div className="container">
          {/* Portfolio Header */}
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">Our Portfolio</h2>
              <p className="lead text-muted">
                Explore our curated collection of design projects
              </p>
            </div>
          </div>

          {/* Filter Controls */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="d-flex justify-content-center flex-wrap">
                <button
                  className={`btn btn-outline-dark mx-2 mb-2 ${
                    filter === "all" ? "active" : ""
                  }`}
                  onClick={() => setFilter("all")}
                >
                  All Projects
                </button>
                <button
                  className={`btn btn-outline-dark mx-2 mb-2 ${
                    filter === "residential" ? "active" : ""
                  }`}
                  onClick={() => setFilter("residential")}
                >
                  Residential
                </button>
                <button
                  className={`btn btn-outline-dark mx-2 mb-2 ${
                    filter === "commercial" ? "active" : ""
                  }`}
                  onClick={() => setFilter("commercial")}
                >
                  Commercial
                </button>
                <button
                  className={`btn btn-outline-dark mx-2 mb-2 ${
                    filter === "hospitality" ? "active" : ""
                  }`}
                  onClick={() => setFilter("hospitality")}
                >
                  Hospitality
                </button>
              </div>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="row g-4">
            {projects.map((project) => (
              <div className="col-lg-4 col-md-6" key={project.id}>
                <div className="portfolio-item card h-100 border-0 shadow-sm overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="img-fluid card-img-top portfolio-image"
                    />
                    <div className="portfolio-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                      <div className="text-center p-3">
                        <h3 className="text-white mb-2">{project.title}</h3>
                        <p className="text-light mb-3">{project.location}</p>
                        <div className="d-flex justify-content-center">
                          <button
                            className="btn btn-light btn-sm mx-1 rounded-circle"
                            onClick={() => handleProjectSelect(project)}
                          >
                            <FaSearch />
                          </button>
                          <button className="btn btn-light btn-sm mx-1 rounded-circle">
                            <FaExpand />
                          </button>
                          <button
                            className="btn btn-light btn-sm mx-1 rounded-circle"
                            onClick={() => handleLike(project.id)}
                          >
                            <FaHeart />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="h5 card-title mb-1">{project.title}</h3>
                    <div className="d-flex justify-content-between align-items-center">
                      <span
                        className="badge"
                        style={{ backgroundColor: "#8B5A2B", color: "#fff" }}
                      >
                        {project.category}
                      </span>

                      <small className="text-muted">
                        <FaHeart className="text-danger me-1" /> {project.likes}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              <button
                className="btn btn-lg px-4"
                style={{
                  backgroundColor: "#8B5A2B",
                  borderColor: "#8B5A2B",
                  color: "#fff",
                }}
              >
                View Full Portfolio
              </button>
            </div>
          </div>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div
            className={`modal fade ${showModal ? "show d-block" : ""}`}
            id="projectModal"
            tabIndex="-1"
            style={{
              backgroundColor: showModal ? "rgba(0,0,0,0.5)" : "transparent",
            }}
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{selectedProject.title}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="img-fluid rounded"
                      />
                    </div>
                    <div className="col-md-6">
                      <p className="text-muted">
                        {selectedProject.description}
                      </p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <span>Location:</span>
                          <span className="fw-medium">
                            {selectedProject.location}
                          </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <span>Category:</span>
                          <span className="badge bg-primary">
                            {selectedProject.category}
                          </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <span>Year:</span>
                          <span className="fw-medium">
                            {selectedProject.year}
                          </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <span>Size:</span>
                          <span className="fw-medium">
                            {selectedProject.size}
                          </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <span>Likes:</span>
                          <span className="fw-medium">
                            <FaHeart className="text-danger me-1" />{" "}
                            {selectedProject.likes}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer2 />
    </>
  );
};

export default Portfolio;
