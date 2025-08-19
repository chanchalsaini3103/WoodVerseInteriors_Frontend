import React from "react";
import "../styles/Footer.css";
import {
  FaInstagram,
  FaPinterestP,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <div className="footer-logo">MH Interiors</div>
          <div className="footer-links">
            <div>
              <h4>Explore</h4>
              <ul>
                <li>Read</li>
                <li>Watch</li>
                <li>Shop</li>
                <li>Studio</li>
                <li>Portfolio</li>
                <li>About</li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li>About MH Interiors</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Press Requests</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right side - Mailing + Social */}
        <div className="footer-right">
  <h4>Join Our Mailing List</h4>
  <div className="subscribe-box">
    <input type="email" placeholder="Email Address" />
    <button>→</button>
  </div>

  <div className="footer-follow-section">
    <h4>Follow</h4>
    <div className="footer-social-icons">
      <FaInstagram />
      <FaPinterestP />
      <FaFacebookF />
      <FaTiktok />
    </div>
  </div>
</div>

      </div>

      <div className="footer-bottom">
        <span>COPYRIGHT MH Interiors 2025</span>
        <span>MADE BY Deepak Suthar</span>
      </div>
    </footer>
  );
};

export default Footer;
