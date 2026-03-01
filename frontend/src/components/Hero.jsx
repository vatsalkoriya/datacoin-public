import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = ({ title, subtitle, description, buttonText, buttonLink, backgroundType = 'gradient' }) => {
  return (
    <section className={`hero hero-${backgroundType}`}>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">{title}</span>
          </h1>
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}
          {description && <p className="hero-description">{description}</p>}
          {buttonText && (
            <div className="hero-buttons">
              <Link to={buttonLink} className="btn btn-primary">
                {buttonText}
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                View Our Work
              </Link>
            </div>
          )}
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <span className="icon">💻</span>
            <p>Web Design & Development</p>
          </div>
          <div className="floating-card card-2">
            <span className="icon">📱</span>
            <p>Data Analytics Services</p>
          </div>
          <div className="floating-card card-3">
            <span className="icon">☁️</span>
            <p>Business Analytics Solutions</p>
          </div>
        </div>
      </div>
      <div className="hero-decoration"></div>
    </section>
  );
};

export default Hero;
