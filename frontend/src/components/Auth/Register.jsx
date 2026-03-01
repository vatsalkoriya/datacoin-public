import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import "./Authform.css"; // Corrected the filename to be consistent

const Register = () => {
  // --- START OF FIX ---

  // 1. Initialize state for all form fields
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  
  // 2. Initialize the navigate function
  const navigate = useNavigate(); 

  // 3. Destructure variables from the state object
  const { username, email, password } = formData;

  // 4. Define the onChange handler to update state
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  
  // --- END OF FIX ---

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    try {
      // Pass the state variables to the API call
      const { data } = await api.post('/auth/register', { username, email, password });
      localStorage.setItem('userInfo', JSON.stringify(data));
      // Dispatch custom event to notify navbar of login
      window.dispatchEvent(new Event('userLoggedIn'));
      navigate('/profile');
    } catch (error) {
      if (error.response) {
        console.error('Server Response Error:', error.response.data);
        setErrorMessage(error.response.data.message || 'Registration failed.');
      } else if (error.request) {
        console.error('Network Error:', error.request);
        setErrorMessage('Network error: Could not connect to the server.');
      } else {
        console.error('Error:', error.message);
        setErrorMessage('An unexpected error occurred.');
      }
    }
  };

  return (
    // 5. Added consistent JSX structure like in Login.js
    <div className="auth-container">
      <h1>Register</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            minLength="6"
            required
          />
        </div>
        <button type="submit" className="auth-btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
