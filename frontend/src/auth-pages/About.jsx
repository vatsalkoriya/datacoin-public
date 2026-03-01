import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>About This Application</h1>
      <p style={{ textAlign: 'center', fontSize: '1.1rem' }}>
        This page is exclusively available to logged-in users.
      </p>
      <div style={{ maxWidth: '800px', margin: '2rem auto', lineHeight: '1.8' }}>
        <p>
          Welcome to this demonstration of a full-stack MERN (MongoDB, Express.js, React, Node.js) application. 
          This project showcases a complete user authentication and management system with role-based access control.
        </p>
        <br />
        <p>
          Key features include user registration, secure login, profile viewing, and an administrative dashboard where admins can manage all users. The backend is built with Express and MongoDB for robust API and data management, while the frontend is a responsive React application.
        </p>
      </div>
    </div>
  );
};

export default About;