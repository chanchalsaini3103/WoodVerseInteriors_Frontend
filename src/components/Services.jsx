import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import '../styles/Services.css';

import modularImg from '../images/modular1.jpg';
import modular2Img from '../images/modular2.jpeg';
import modular3Img from '../images/modular3.jpg';
import modular4Img from '../images/modular4.jpeg';

const Services = () => {
  const services = [
    {
      title: "Modular Interiors",
      description: "Functional kitchen, wardrobe and storage",
      image: modularImg,
      link: "/interiors/offerings/modular-interiors"
    },
    {
      title: "Full Home Interiors",
      description: "Turnkey interior solutions for your home",
      image: modular2Img,
      link: "/interiors/offerings/full-home-interiors"
    },
    {
      title: "Luxury Interiors",
      description: "Tailored interiors that redefine elegance",
      image: modular3Img,
      link: "/interiors/offerings/luxury-interiors"
    },
    {
      title: "Renovations",
      description: "Expert solutions to upgrade your home",
      image: modular4Img,
      link: "/interiors/offerings/renovations"
    }
  ];

  return (
    <section className="services-section">
      <div className="services-header">
        <h2>One-stop shop for all things interiors</h2>
        <p>
          Be it end-to-end interiors, renovation or modular solutions, we have it all for your home
          or office. With a wide range of furniture & decor, we have your back from start to finish.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <Link to={service.link} className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-text">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="icon-circle">
                <FaChevronRight />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
