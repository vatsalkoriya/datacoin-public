import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>DataCoin Services</h3>
            <p>Delivering innovative technology solutions that transform businesses and drive digital excellence.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">𝕏</a>
              <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A111838988&keywords=datacoin%20software%20pvt%20ltd&origin=RICH_QUERY_SUGGESTION&position=1&sid=Aq6" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
              <a href="https://www.instagram.com/datacoin_software/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Web Design & Development</a></li>
              <li><a href="#services">Data Analytics Services</a></li>
              <li><a href="#services">Business Analytics Solutions</a></li>
              <li><a href="#services">AI & Machine Learning</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📧 datacoinsoftware@gmail.com</p>
            <p>📱+91 91024 12115, CEO</p>
            <p>📱+91 9939429446, CTO</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} DataCoin Services. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://example.com/privacy">Privacy Policy</a>
            <a href="https://example.com/terms">Terms of Service</a>
            <a href="https://example.com/cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
