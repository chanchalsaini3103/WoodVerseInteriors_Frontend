import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  // Background color logic
  const navbarStyle = {
    backgroundColor: !isHome ? "#f2ede7" : scrolled ? "#f2ede7" : "transparent",
    transition: "background-color 0.3s ease"
  };

  // Link color logic (black on non-home, white on transparent home)
  const linkColor = !isHome || scrolled ? "#000" : "#fff";

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} style={navbarStyle}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" style={{ color: linkColor }}>
          WoodVerse Interiors
        </Link>

        {/* Desktop Menu Links */}
        <div className="navbar-links">
          <NavLink to="/discover" color={linkColor}>DISCOVER</NavLink>
          <NavLink to="/read" color={linkColor}>PORTFOLIO</NavLink>
          <NavLink to="/watch" color={linkColor}>BLOG</NavLink>
          <NavLink to="/shop" color={linkColor}>SHOP</NavLink>
          <NavLink to="/about-us" color={linkColor}>ABOUT US</NavLink>
          <NavLink to="/portfolio" color={linkColor}>CONTACT</NavLink>
          <NavLink to="/follow" color={linkColor}>FOLLOW</NavLink>

          <button className="search-btn fade-down" style={{ color: linkColor }}>
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
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-pinterest"></i></a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-tiktok"></i></a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ to, children, color }) {
  return (
    <Link to={to} className="nav-link fade-down" style={{ color }}>
      {children}
    </Link>
  );
}

export default Navbar;
