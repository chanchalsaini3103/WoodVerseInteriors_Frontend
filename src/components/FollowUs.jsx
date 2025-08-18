import React from 'react';
import '../styles/FollowUs.css';
import Footer2 from './Footer2';

const FollowUs = () => {
  // Sample social media posts
  const instagramPosts = [
    { id: 1, image: '/images/social/insta-1.jpg', likes: '2.4k', comments: '143' },
    { id: 2, image: '/images/social/insta-2.jpg', likes: '1.8k', comments: '92' },
    { id: 3, image: '/images/social/insta-3.jpg', likes: '3.1k', comments: '217' },
    { id: 4, image: '/images/social/insta-4.jpg', likes: '2.7k', comments: '156' },
    { id: 5, image: '/images/social/insta-5.jpg', likes: '2.0k', comments: '124' },
    { id: 6, image: '/images/social/insta-6.jpg', likes: '1.5k', comments: '87' }
  ];

  const pinterestBoards = [
    { id: 1, image: '/images/social/pin-1.jpg', title: 'Modern Wood Interiors', pins: '428' },
    { id: 2, image: '/images/social/pin-2.jpg', title: 'Kitchen Designs', pins: '512' },
    { id: 3, image: '/images/social/pin-3.jpg', title: 'Custom Furniture', pins: '387' },
    { id: 4, image: '/images/social/pin-4.jpg', title: 'Sustainable Materials', pins: '295' }
  ];

  return (
    <>
    <div className="follow-us-container">
      {/* Hero Section */}
      <section className="follow-hero">
        <div className="hero-overlay">
          <h1>Join Our Design Community</h1>
          <p>Follow for daily inspiration, behind-the-scenes looks, and design tips</p>
        </div>
      </section>

      {/* Social Platforms Section */}
      <section className="social-platforms">
        <h2>Connect With Us</h2>
        <p className="platforms-intro">
          We share our latest projects, design insights, and exclusive content across these platforms
        </p>

        <div className="platform-cards">
          {/* Instagram Card */}
          <div className="platform-card instagram">
            <div className="platform-header">
              <i className="fab fa-instagram"></i>
              <h3>Instagram</h3>
            </div>
            <p>Daily design inspiration and project sneak peeks</p>
            <a 
              href="https://instagram.com/mtwoodverse" 
              target="_blank" 
              rel="noopener noreferrer"
              className="follow-button"
            >
              Follow @mtwoodverse
            </a>
            <div className="stats">
              <span>24.5k followers</span>
            </div>
          </div>

          {/* Pinterest Card */}
          <div className="platform-card pinterest">
            <div className="platform-header">
              <i className="fab fa-pinterest-p"></i>
              <h3>Pinterest</h3>
            </div>
            <p>Curated boards of our favorite designs and trends</p>
            <a 
              href="https://pinterest.com/mtwoodverse" 
              target="_blank" 
              rel="noopener noreferrer"
              className="follow-button"
            >
              Follow Our Boards
            </a>
            <div className="stats">
              <span>12.3k monthly viewers</span>
            </div>
          </div>

          {/* Houzz Card */}
          <div className="platform-card houzz">
            <div className="platform-header">
              <i className="fab fa-houzz"></i>
              <h3>Houzz</h3>
            </div>
            <p>Professional portfolio and client reviews</p>
            <a 
              href="https://houzz.com/pro/mtwoodverse" 
              target="_blank" 
              rel="noopener noreferrer"
              className="follow-button"
            >
              View Our Profile
            </a>
            <div className="stats">
              <span>35 project photos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="instagram-feed">
        <div className="section-header">
          <h2>Latest From Instagram</h2>
          <a 
            href="https://instagram.com/mtwoodverse" 
            target="_blank" 
            rel="noopener noreferrer"
            className="view-all"
          >
            View All Posts <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        
        <div className="instagram-grid">
          {instagramPosts.map(post => (
            <div className="instagram-post" key={post.id}>
              <img src={post.image} alt={`Instagram post ${post.id}`} />
              <div className="post-overlay">
                <div className="post-stats">
                  <span><i className="fas fa-heart"></i> {post.likes}</span>
                  <span><i className="fas fa-comment"></i> {post.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pinterest Section */}
      <section className="pinterest-section">
        <div className="section-header">
          <h2>Our Pinterest Boards</h2>
          <a 
            href="https://pinterest.com/mtwoodverse" 
            target="_blank" 
            rel="noopener noreferrer"
            className="view-all"
          >
            View All Boards <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        
        <div className="pinterest-grid">
          {pinterestBoards.map(board => (
            <div className="pinterest-board" key={board.id}>
              <img src={board.image} alt={`Pinterest board: ${board.title}`} />
              <div className="board-info">
                <h4>{board.title}</h4>
                <span>{board.pins} pins</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-cta">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2>Get Design Insights Directly</h2>
            <p>
              Subscribe to our newsletter for exclusive content, design tips, and early access to 
              our latest collections
            </p>
          </div>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Your email address" 
              required 
            />
            <button type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
     <Footer2 />
    </>
  );
};

export default FollowUs;