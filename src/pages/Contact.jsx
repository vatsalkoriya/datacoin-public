import React, { useState } from 'react';
import Hero from '../components/Hero';
import './Contact.css';
import { sendContact } from '../services/contactService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const { data } = await sendContact(formData);
      console.log('api response', data);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || 'Unable to send message. Please try again later.'
      );
    }
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'datacoinsoftware@gmail.com',
      description: 'Send us your inquiry anytime'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 9939429446',
      description: 'Call us during business hours'
    },
    {
      icon: '📍',
      title: 'Office',
      value: 'Jaipur, Rajasthan, India',
      description: 'Visit our headquarters'
    },
    {
      icon: '🕐',
      title: 'Hours',
      value: '24/7 Support',
      description: 'Always here to help you'
    }
  ];

  return (
    <div className="contact">
      <Hero 
        title="Get In Touch"
        subtitle="Let's Talk About Your Project"
        description="Have a question or ready to start your next project? We'd love to hear from you. Reach out to our team today."
        backgroundType="dark"
      />

      {/* Contact Methods */}
      <section className="contact-methods">
        <div className="container">
          <div className="methods-grid">
            {contactMethods.map((method, idx) => (
              <div key={idx} className="method-card card">
                <div className="method-icon">{method.icon}</div>
                <h3>{method.title}</h3>
                <p className="method-value">{method.value}</p>
                <p className="method-desc">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-wrapper">
            <div className="form-header">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>

            {submitted && (
              <div className="success-message">
                <p>✓ Thank you! Your message has been sent successfully. We'll be in touch soon.</p>
              </div>
            )}

            {error && (
              <div className="error-message">
                <p>{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder=""
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder=""
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Interested In *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="cloud">Cloud Solutions</option>
                  <option value="ai">AI & Machine Learning</option>
                  <option value="security">Cybersecurity</option>
                  <option value="analytics">Data Analytics</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us about your project and what you're looking to achieve..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="map-section">
        <div className="map-placeholder">
          <div className="container">
            <h2>Visit Our Office</h2>
            <p>📍 Jaipur, Rajasthan, India</p>
            <p style={{marginTop: '10px'}}>Open Monday - Friday, 9am - 6pm PST</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked <span>Questions</span></h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>What's your response time?</h4>
              <p>We typically respond to inquiries within 24 business hours. Urgent matters may receive priority attention.</p>
            </div>
            <div className="faq-item">
              <h4>Do you offer free consultations?</h4>
              <p>Yes! We offer a free 30-minute initial consultation to discuss your project requirements and how we can help.</p>
            </div>
            <div className="faq-item">
              <h4>What's your project process?</h4>
              <p>We follow a proven methodology: consultation, strategy, development, testing, deployment, and ongoing support.</p>
            </div>
            <div className="faq-item">
              <h4>Do you provide post-launch support?</h4>
              <p>Absolutely! We provide comprehensive support and maintenance packages to keep your solution running smoothly.</p>
            </div>
            <div className="faq-item">
              <h4>Can you work with startups?</h4>
              <p>Yes, we love working with startups! We offer flexible pricing and customized solutions for emerging companies.</p>
            </div>
            <div className="faq-item">
              <h4>What communication tools do you use?</h4>
              <p>We use email, video calls, Slack, and project management tools to keep you updated throughout the project.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
