import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import './Services.css';

const Services = () => {
  const mainServices = [
    {
      id: 1,
      icon: '💻',
      title: 'Web Design & Development',
      description: 'Create powerful, responsive web applications that drive business growth and user engagement.',
      features: ['Responsive Design', 'Modern Frameworks', 'Progressive Web Apps', 'API Development', 'Database Design', 'Performance Optimization'],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'MySQL']
    },
    {
      id: 2,
      icon: '📊',
      title: 'Data Analytics Services',
      description: 'Transform raw data into actionable insights for smarter business decisions.',
      features: ['Data Cleaning', 'KPI Tracking', 'Trend Analysis', 'Business Insights', 'Automated Reports', 'Custom Analytics'],
      technologies: ['Tableau', 'Power BI', 'SQL', 'Python', 'Apache Spark', 'Hadoop']
    },
    {
      id: 3,
      icon: '📈',
      title: 'Business Analytics Solutions',
      description: 'Analyze performance metrics to optimize strategy, operations, and business growth.',
      features: ['Performance Insights', 'Strategic Reporting', 'Custom Dashboards', 'Process Optimization', 'Market Analysis', 'Executive Reports'],
      technologies: ['Power BI', 'Excel', 'SQL', 'Tableau', 'Looker', 'Google Analytics']
    },
    {
      id: 4,
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Implement intelligent solutions that learn and improve, automating complex business processes.',
      features: ['Model Development', 'Data Science', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Deep Learning'],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'Pandas', 'OpenAI API']
    },
    {
      id: 5,
      icon: '🔒',
      title: 'Data Visualization & Reporting',
      description: 'Create interactive dashboards and reports for clear, impactful data storytelling.',
      features: ['Interactive Dashboards', 'Real-Time Data', 'Visual Storytelling', 'Automated Reporting', 'Insightful Charts', 'User-Friendly Views'],
      technologies: ['Tableau', 'Power BI', 'D3.js', 'Chart.js', 'Python', 'Excel']
    },
    {
      id: 6,
      icon: '📊',
      title: 'Data Science Solutions',
      description: 'Apply advanced analytics and machine learning to solve complex business problems.',
      features: ['Data Warehousing', 'BI Dashboard', 'Reporting', 'Predictive Modeling', 'Data Mining', 'Real-time Analytics'],
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We understand your business needs and goals in detail.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Develop a comprehensive solution strategy tailored to your requirements.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build your solution using agile methodology and best practices.'
    },
    {
      step: '04',
      title: 'Testing',
      description: 'Rigorous QA testing ensures quality and reliability.'
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'Launch your solution with minimal downtime and risk.'
    },
    {
      step: '06',
      title: 'Support',
      description: 'Ongoing support and maintenance to keep your system running smoothly.'
    }
  ];

  return (
    <div className="services">
      <Hero 
        title="Our Professional Services"
        subtitle="End-to-End Technology Solutions"
        description="From concept to deployment, we deliver comprehensive services tailored to your business needs."
        backgroundType="dark"
      />

      {/* Detailed Services */}
      <section className="detailed-services">
        <div className="container">
          <h2 className="section-title">What We <span>Offer</span></h2>
          
          <div className="services-list">
            {mainServices.map((service, idx) => (
              <div key={service.id} className="service-detail card">
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <div className="service-info">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>

                <div className="service-content">
                  <div className="features-col">
                    <h4>Key Features</h4>
                    <ul>
                      {service.features.map((feature, i) => (
                        <li key={i}>✓ {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="tech-col">
                    <h4>Technologies</h4>
                    <div className="tech-tags">
                      {service.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Our <span>Process</span></h2>
          <div className="process-timeline">
            {process.map((item, idx) => (
              <div key={idx} className="process-item">
                <div className="process-step">{item.step}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Need a Custom Solution?</h2>
            <p>Tell us about your project and let's create something amazing together.</p>
            <Link to="/contact" className="btn btn-secondary btn-lg">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
