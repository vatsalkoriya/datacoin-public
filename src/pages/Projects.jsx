import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import './Projects.css';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: '🛍️',
      client: 'Global Retail Co.',
      description: 'Full-stack e-commerce platform with payment integration and inventory management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      result: 'Increased sales by 45% in first 3 months'
    },
    {
      id: 2,
      title: 'Fitness Mobile App',
      category: 'mobile',
      image: '💪',
      client: 'FitLife Inc.',
      description: 'Native iOS and Android fitness tracking application with real-time sync.',
      technologies: ['React Native', 'Firebase', 'AWS Lambda'],
      result: '100K+ downloads in first month'
    },
    {
      id: 3,
      title: 'AI Analytics Dashboard',
      category: 'ai',
      image: '📊',
      client: 'Analytics Plus',
      description: 'Machine learning powered analytics dashboard for business intelligence.',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
      result: 'Reduced analysis time by 80%'
    },
    {
      id: 4,
      title: 'Cloud Infrastructure Overhaul',
      category: 'cloud',
      image: '☁️',
      client: 'Enterprise Solutions',
      description: 'Complete cloud migration from on-premises to AWS with auto-scaling.',
      technologies: ['AWS', 'Kubernetes', 'Terraform', 'Docker'],
      result: '60% cost reduction in infrastructure'
    },
    {
      id: 5,
      title: 'Corporate Website',
      category: 'web',
      image: '🌐',
      client: 'TechCorp International',
      description: 'Modern responsive corporate website with CMS integration.',
      technologies: ['Next.js', 'Headless CMS', 'Vercel', 'SEO'],
      result: 'Top Google ranking for 15+ keywords'
    },
    {
      id: 6,
      title: 'Banking Security System',
      category: 'security',
      image: '🔐',
      client: 'FinanceBank Ltd.',
      description: 'Enterprise-grade security system with multi-factor authentication.',
      technologies: ['Java', 'Spring Boot', 'OAuth 2.0', 'Encryption'],
      result: '100% security compliance achieved'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Development' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'cloud', label: 'Cloud' },
    { value: 'ai', label: 'AI & ML' },
    { value: 'security', label: 'Security' },
    { value: 'data', label: 'Data Science & Analytics' },
    { value: 'business', label: 'Business Solutions' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="projects">
      <Hero 
        title="Our Portfolio"
        subtitle="Showcasing Excellence in Every Project"
        description="Explore our latest projects and see how we've helped businesses transform through technology."
        backgroundType="dark"
      />

      {/* Projects Section */}
      <section className="projects-section">
        <div className="container">
          <h2 className="section-title">Featured <span>Projects</span></h2>

          {/* Filter */}
          <div className="filter-buttons">
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`filter-btn ${selectedCategory === cat.value ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card card">
                <div className="project-image">{project.image}</div>
                <h3>{project.title}</h3>
                <p className="client-name">For: {project.client}</p>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <div className="project-result">
                  <p><strong>Results:</strong> {project.result}</p>
                </div>

                <Link to="/contact" className="project-link">View Case Study →</Link>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="projects-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-box">
              <h3>50+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="stat-box">
              <h3>30+</h3>
              <p>Satisfied Clients</p>
            </div>
            <div className="stat-box">
              <h3>30+</h3>
              <p>Team Members</p>
            </div>
            <div className="stat-box">
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="projects-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's collaborate to build something extraordinary for your business.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get In Touch
              </Link>
              <Link to="/services" className="btn btn-secondary btn-lg">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
