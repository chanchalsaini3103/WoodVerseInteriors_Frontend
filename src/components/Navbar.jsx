import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            WoodVerse Interiors
          </Link>

          {/* Desktop Menu Links */}
          <div className="navbar-links">
            <NavLink to="/10-years">DISCOVER</NavLink>
            <NavLink to="/read">PORTFOLIO</NavLink>
            <NavLink to="/watch">BLOG</NavLink>
            <NavLink to="/shop">SHOP</NavLink>
            <NavLink to="/studio">ABOUT US</NavLink>
            <NavLink to="/portfolio">CONTACT</NavLink>
            {/* <NavLink to="/about">ABOUT</NavLink> */}
            <NavLink to="/follow">FOLLOW</NavLink>

            <button className="search-btn fade-down">
              <i className="fas fa-search"></i>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? "open" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="mobile-menu-overlay fade-in">
            {/* Logo at Top */}
            <Link to="/" className="mobile-menu-logo">
              WoodVerse Interiors
            </Link>

            <div className="mobile-menu-content slide-up">
              <Link to="/10-years">10 YEARS</Link>
              <Link to="/read">READ</Link>
              <Link to="/watch">WATCH</Link>
              <Link to="/shop">SHOP</Link>
              <Link to="/studio">STUDIO</Link>
              <Link to="/portfolio">PORTFOLIO</Link>
              <Link to="/about">ABOUT</Link>
              <Link to="/follow">FOLLOW</Link>

              <div className="mobile-shop-cta">
                <span>WoodVerse Interiors & CO.</span>
                <button>SHOP NOW</button>
              </div>
            </div>

            {/* Social Links at Bottom */}
            <div className="mobile-social">
              <span>FOLLOW ON</span>
              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-pinterest"></i>
                </a>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <h1 className="fade-up delay-1">
            Our signature style, your perfect space
          </h1>
          <p className="fade-up delay-2">
            Crafting interiors that feel like home
          </p>
          <button className="cta-button fade-up delay-3">SEE MORE</button>
        </div>
      </section>
    </div>
  );
}

function NavLink({ to, children }) {
  return (
    <Link to={to} className="nav-link fade-down">
      {children}
    </Link>
  );
}

export default Navbar;
