import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import './About.css';

const About = () => {
  const team = [
    {
      id: 1,
      name: 'Mahesh Gupta',
      role: 'Founder & CEO',
      image: '/images/team/ceo.jpg',
      bio: 'Leads company vision, strategy, partnerships, and long-term growth.',
      social: { linkedin: '#', twitter: '#', github: '#' }
    },
    {
      id: 2,
      name: 'Manvi Shriwastaw',
      role: 'Co-Founder & CFO',
      image: '/images/team/cfo.jpg',
      bio: 'Manages finance, compliance, budgeting, and business sustainability.',
      social: { linkedin: '#', twitter: '#', github: '#' }
    },
    {
      id: 3,
      name: 'Raju Kr Tiwari',
      role: 'Chairperson & CTO',
      image: '/images/team/cto.jpg',
      bio: 'Oversees technology strategy, architecture, and product development.',
      social: { linkedin: '#', twitter: '#', github: '#' }
    },
    {
      id: 4,
      name: 'Megha Shriwastaw',
      role: 'CCO & CMO',
      image: '/images/team/cco.jpg',
      bio: 'Drives client relations, sales strategy, and brand positioning.',
      social: { linkedin: '#', twitter: '#', github: '#' }
    },
    {
      id: 5,
      name: 'Sonu Kumar',
      role: 'CBO & CIO',
      image: '/images/team/cbo.jpg',
      bio: 'Leads business expansion, partnerships, and IT governance.',
      social: { linkedin: '#', twitter: '#', github: '#' }
    },
    
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.'
    },
    {
      title: 'Excellence',
      description: 'Quality is non-negotiable. We strive for perfection in every line of code and design.'
    },
    {
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and accountability in all our dealings.'
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients as partners to achieve their business goals.'
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and stay ahead of industry trends.'
    },
    {
      title: 'Social Responsibility',
      description: 'We believe in giving back and creating positive impact in our communities.'
    }
  ];

  const timeline = [
    { year: '2026- January', event: 'Company Founded with vision to transform digital landscape' },
    { year: '2026- February', event: 'Expanded to 50+ team members and opened new offices' },
    { year: '2026- March', event: 'Planning to Delivered 100th successful project to global clients' },
    { year: '2026- April', event: ' Planning to Achieved ISO certifications and industry recognition' },
    { year: '2026- May', event: 'Planning to Reached 500+ completed projects milestone' },
    { year: '2026- June', event: 'Planning to Launched AI & Machine Learning division' }
  ];

  return (
    <div className="about">
      <Hero 
        title="About DataCoin"
        subtitle="Building Tomorrow's Solutions Today"
        description="Learn about our journey, mission, and the team driving innovation in the technology sector."
        backgroundType="dark"
      />

      {/* Our Story */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2>Our <span>Story</span></h2>
              <p>
               Datacoin is a technology-driven startup founded in 2026 with a vision to deliver innovative data and software solutions. The company is officially registered under the Ministry of Micro, Small & Medium Enterprises (MSME), Government of India, and is recognized as a startup under the Startup India initiative.
              </p>
              <p>
                We've helped over 30 clients across various industries transform their business through digital innovation. Our commitment to excellence, continuous learning, and client success has been the driving force behind our growth.
              </p>
              <p>
                With a commitment to innovation, quality, and growth, Datacoin aims to build scalable digital solutions for the future.
              </p>
            </div>
            <div className="story-visual">
              <div className="story-stat">
                <h3>1+</h3>
                <p>Years of Excellence</p>
              </div>
              <div className="story-stat">
                <h3>30+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="story-stat">
                <h3>25+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our <span>Values</span></h2>
          <div className="values-grid">
            {values.map((value, idx) => (
              <div key={idx} className="value-card card">
                <div className="value-number">{idx + 1}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="container">
          <h2 className="section-title">Our <span>Journey</span></h2>
          <div className="timeline">
            {timeline.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>{item.year}</h4>
                  <p>{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Our <span>Team</span></h2>
          <p className="team-intro">Meet the talented people driving innovation at DataCoin</p>
          <div className="team-grid">
            {team.map((member) => (
              <div key={member.id} className="team-card card">
                <div className="team-image">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x300?text=' + member.name.replace(/ /g, '+');
                    }}
                  />
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
                <div className="team-social">
                  <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A111838988&keywords=datacoin%20software%20pvt%20ltd&origin=RICH_QUERY_SUGGESTION&position=1&sid=Aq6" target="_blank" rel="noopener noreferrer" title="LinkedIn">in</a>
                  <a href={member.social.twitter} title="Twitter">𝕏</a>
                  <a href={member.social.github} title="GitHub">gh</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready to Partner With Us?</h2>
          <p>Let's create something amazing together. Get in touch with our team today.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
