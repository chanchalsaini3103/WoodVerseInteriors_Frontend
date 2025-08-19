import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Blog.css';

// Blog images
import woodSelection from '../images/projects/loft-transformation.jpg';
import woodFinishes from '../images/projects/loft-transformation.jpg';
import woodTones from '../images/projects/loft-transformation.jpg';
import customFurniture from '../images/projects/loft-transformation.jpg';
import smallSpaces from '../images/projects/loft-transformation.jpg';
import woodCare from '../images/projects/loft-transformation.jpg';
import Footer2 from './Footer2';

const Blog = () => {
  // Sample blog posts data
  const featuredPosts = [
    {
      id: 1,
      title: "The Art of Sustainable Wood Selection",
      excerpt: "Discover how to choose ethically sourced wood that doesn't compromise on quality or aesthetics.",
      category: "Materials",
      date: "May 15, 2023",
      readTime: "6 min read",
      image: woodSelection
    },
    {
      id: 2,
      title: "5 Timeless Wood Finishes for Modern Interiors",
      excerpt: "Explore classic wood finishing techniques that bring warmth and character to contemporary spaces.",
      category: "Design Tips",
      date: "April 28, 2023",
      readTime: "8 min read",
      image: woodFinishes
    }
  ];

  const recentPosts = [
    {
      id: 3,
      title: "Blending Wood Tones: A Designer's Guide",
      excerpt: "Learn the secrets to mixing different wood tones for a harmonious interior palette.",
      category: "Design Tips",
      date: "June 2, 2023",
      readTime: "5 min read",
      image: woodTones
    },
    {
      id: 4,
      title: "The Craftsmanship Behind Custom Wood Furniture",
      excerpt: "Go behind the scenes with our master craftsmen to see how we create heirloom-quality pieces.",
      category: "Craftsmanship",
      date: "May 22, 2023",
      readTime: "7 min read",
      image: customFurniture
    },
    {
      id: 5,
      title: "Small Space Solutions with Wood Accents",
      excerpt: "How to use wood elements to make compact living spaces feel larger and more inviting.",
      category: "Space Planning",
      date: "May 10, 2023",
      readTime: "4 min read",
      image: smallSpaces
    },
    {
      id: 6,
      title: "Maintaining Your Wood Surfaces: A Seasonal Guide",
      excerpt: "Keep your wood floors, furniture, and accents looking their best year-round with these care tips.",
      category: "Maintenance",
      date: "April 15, 2023",
      readTime: "5 min read",
      image: woodCare
    }
  ];

  const categories = [
    { name: "All Articles", count: 24 },
    { name: "Design Tips", count: 8 },
    { name: "Materials", count: 5 },
    { name: "Craftsmanship", count: 4 },
    { name: "Space Planning", count: 4 },
    { name: "Maintenance", count: 3 }
  ];

  return (
    <>
    <div className="blog-container">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="hero-overlay">
          <h1>MH Interiors Journal</h1>
          <p>Design insights, woodworking expertise, and interior inspiration</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="blog-content">
        {/* Featured Posts Section */}
        <section className="featured-posts">
          <h2>Featured Articles</h2>
          <div className="featured-grid">
            {featuredPosts.map(post => (
              <div className="featured-post" key={post.id}>
                <div className="post-image">
                  <img src={post.image} alt={post.title} />
                  <div className="category-tag">{post.category}</div>
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span className="date">{post.date}</span>
                    <span className="read-time">{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p className="excerpt">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="read-more">
                    Read Article <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Posts Section */}
        <section className="recent-posts">
          <div className="section-header">
            <h2>Recent Articles</h2>
            <div className="view-options">
              <span>Sort by:</span>
              <select>
                <option>Newest First</option>
                <option>Most Popular</option>
                <option>Oldest First</option>
              </select>
            </div>
          </div>

          <div className="recent-grid">
            {recentPosts.map(post => (
              <div className="recent-post" key={post.id}>
                <div className="post-image">
                  <img src={post.image} alt={post.title} />
                  <div className="category-tag">{post.category}</div>
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span className="date">{post.date}</span>
                    <span className="read-time">{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p className="excerpt">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="read-more">
                    Read Article <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>
              Next <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </section>
      </div>

      {/* Sidebar */}
      <aside className="blog-sidebar">
        {/* Search Widget */}
        <div className="sidebar-widget search-widget">
          <h3>Search Articles</h3>
          <div className="search-form">
            <input type="text" placeholder="Type keywords..." />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        {/* Categories Widget */}
        <div className="sidebar-widget categories-widget">
          <h3>Categories</h3>
          <ul className="categories-list">
            {categories.map((category, index) => (
              <li key={index}>
                <Link to={`/blog/category/${category.name.toLowerCase().replace(' ', '-')}`}>
                  {category.name} <span>({category.count})</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Widget */}
        <div className="sidebar-widget newsletter-widget">
          <h3>Design Newsletter</h3>
          <p>Get our latest articles and exclusive content delivered to your inbox</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Popular Tags Widget */}
        <div className="sidebar-widget tags-widget">
          <h3>Popular Tags</h3>
          <div className="tags-container">
            <Link to="/blog/tag/woodworking">#woodworking</Link>
            <Link to="/blog/tag/sustainable">#sustainable</Link>
            <Link to="/blog/tag/modern">#modern</Link>
            <Link to="/blog/tag/classic">#classic</Link>
            <Link to="/blog/tag/finishes">#finishes</Link>
            <Link to="/blog/tag/furniture">#furniture</Link>
            <Link to="/blog/tag/design">#design</Link>
            <Link to="/blog/tag/craftsmanship">#craftsmanship</Link>
          </div>
        </div>
      </aside>

      {/* CTA Section */}
      <section className="blog-cta">
        <div className="cta-content">
          <h2>Have a Design Challenge?</h2>
          <p>
            Our design team specializes in creating custom wood solutions for unique spaces. 
            Schedule a consultation to discuss your project.
          </p>
          <Link to="/contact" className="cta-button">
            Get Expert Advice
          </Link>
        </div>
      </section>
    </div>
    <Footer2 />
    </>
  );
};

export default Blog;
