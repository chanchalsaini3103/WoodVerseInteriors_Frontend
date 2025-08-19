import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import mhLogo from "../images/logo2.png";
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu whenever route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileMenuOpen]);

  const isHome = location.pathname === "/";
  const navbarStyle = {
    backgroundColor: !isHome ? "#f2ede7" : scrolled ? "#f2ede7" : "transparent",
    transition: "background-color 0.3s ease",
  };
  const linkColor = !isHome || scrolled ? "#000" : "#fff";

  // Helper: close menu then navigate
  const handleMobileLinkClick = () => setMobileMenuOpen(false);

  return (
    <nav
      className={`woodverse-navbar ${scrolled ? "scrolled" : ""}`}
      style={navbarStyle}
    >
      <div className="woodverse-navbar-container">
        <Link to="/" className="woodverse-navbar-logo" style={{ color: linkColor }}>
          {/* ✅ Logo + Text */}
          <img src={mhLogo} alt="MH Interiors Logo" className="navbar-logo-img" />
          MH Interiors
        </Link>

        {/* Desktop Links */}
        <div className="woodverse-navbar-links">
          <NavLink to="/discover" color={linkColor}>
            DISCOVER
          </NavLink>
          <NavLink to="/read" color={linkColor}>
            PORTFOLIO
          </NavLink>
          <NavLink to="/watch" color={linkColor}>
            BLOG
          </NavLink>
          <NavLink to="/shop" color={linkColor}>
            SHOP
          </NavLink>
          <NavLink to="/about-us" color={linkColor}>
            ABOUT US
          </NavLink>
          <NavLink to="/contact" color={linkColor}>
            CONTACT
          </NavLink>
          <NavLink to="/follow" color={linkColor}>
            FOLLOW
          </NavLink>

          <button
            className="woodverse-search-btn fade-down"
            style={{ color: linkColor }}
          >
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`woodverse-mobile-menu-btn ${
            mobileMenuOpen ? "open" : ""
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Overlay (click background to close) */}
      {mobileMenuOpen && (
        <div
          className="woodverse-mobile-menu-overlay fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <Link
            to="/"
            className="woodverse-mobile-menu-logo"
            onClick={handleMobileLinkClick}
          >
            MH Interiors
          </Link>

          <div
            className="woodverse-mobile-menu-content slide-up"
            onClick={(e) => e.stopPropagation()} // prevent overlay close when clicking inside
          >
            <Link to="/discover" onClick={handleMobileLinkClick}>
              DISCOVER
            </Link>
            <Link to="/read" onClick={handleMobileLinkClick}>
              PORTFOLIO
            </Link>
            <Link to="/watch" onClick={handleMobileLinkClick}>
              BLOG
            </Link>
            <Link to="/shop" onClick={handleMobileLinkClick}>
              SHOP
            </Link>
            <Link to="/about-us" onClick={handleMobileLinkClick}>
              ABOUT US
            </Link>
            <Link to="/contact" onClick={handleMobileLinkClick}>
              CONTACT
            </Link>
            <Link to="/follow" onClick={handleMobileLinkClick}>
              FOLLOW
            </Link>

            <div className="woodverse-mobile-shop-cta">
              <span>MH Interiors & CO.</span>
              <button onClick={handleMobileLinkClick}>SHOP NOW</button>
            </div>
          </div>

          {/* Social Links at Bottom */}
          <div className="woodverse-mobile-social">
            <span>FOLLOW ON</span>
            <div className="woodverse-social-icons">
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Pinterest">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="TikTok">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ to, children, color }) {
  return (
    <Link to={to} className="woodverse-nav-link fade-down" style={{ color }}>
      {children}
    </Link>
  );
}

export default Navbar;
