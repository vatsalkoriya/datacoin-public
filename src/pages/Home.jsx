import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import './Home.css';

const Home = () => {
  const services = [
    {
      id: 1,
      icon: '💻',
      title: 'Web Design & Development',
      description: 'Build responsive and scalable web applications with modern technologies and best practices.'
    },
    {
      id: 2,
      icon: '📊',
      title: 'Data Analytics Services',
      description: 'Transform raw data into actionable insights for smarter business decisions.'
    },
    {
      id: 3,
      icon: '📈',
      title: 'Business Analytics Solutions',
      description: 'Analyze performance metrics to optimize strategy, operations, and business growth.'
    },
    {
      id: 4,
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Leverage AI and ML to drive intelligent automation and data-driven decision making.'
    },
    {
      id: 5,
      icon: '📉',
      title: 'Data Visualization & Reporting',
      description: 'Create interactive dashboards and reports for clear, impactful data storytelling.'
    },
    {
      id: 6,
      icon: '🧠',
      title: 'Data Science Solutions',
      description: 'Apply advanced analytics and machine learning to solve complex business problems.'
    }
  ];

  const stats = [
    { number: '30+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '30+', label: 'Team Members' },
    { number: '1+', label: 'Years of Experience' }
  ];

  const features = [
    {
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions.'
    },
    {
      title: 'Quality Assured',
      description: 'Rigorous testing and QA processes ensure premium quality deliverables.'
    },
    {
      title: 'Agile Development',
      description: 'Flexible methodology that adapts to your changing requirements.'
    },
    {
      title: '24/7 Support',
      description: 'Dedicated support team available round the clock for assistance.'
    }
  ];

  return (
    <div className="home">
      <Hero 
        title="Datacoin Software Pvt Ltd"
        subtitle="Data-Driven Technology Solutions for Smarter Businesses"
        description="Datacoin Software Pvt Ltd delivers data analytics, business intelligence, data science, and modern web solutions to help organizations make informed decisions, optimize operations, and accelerate digital growth."
        buttonText="Get Started"
        buttonLink="/contact"
        backgroundType="gradient"
      />

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <h3 className="gradient-text">{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <h2 className="section-title">Our <span>Services</span></h2>
          <div className="grid-3">
            {services.map((service) => (
              <div key={service.id} className="card service-card">
                <div className="icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/services" className="read-more">Learn More →</Link>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/services" className="btn btn-primary btn-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose <span>DataCoin</span></h2>
          <div className="grid-2">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-item">
                <div className="feature-number">{idx + 1}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's work together to bring your vision to life with innovative technology solutions.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Start Your Project
              </Link>
              <Link to="/projects" className="btn btn-secondary btn-lg">
                See Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
