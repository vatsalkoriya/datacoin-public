import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import './Authform.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState(''); // State for showing errors
  const navigate = useNavigate();
  const { email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear previous errors
    try {
      const { data } = await api.post('/auth/login', { email, password });
      localStorage.setItem('userInfo', JSON.stringify(data));
      // Dispatch custom event to notify navbar of login
      window.dispatchEvent(new Event('userLoggedIn'));
      navigate('/profile');
    } catch (error) {
      // --- START OF FIX ---
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Server Response Error:', error.response.data);
        setErrorMessage(error.response.data.message || 'Invalid credentials');
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Network Error:', error.request);
        setErrorMessage('Network error: Could not connect to the server.');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error:', error.message);
        setErrorMessage('An unexpected error occurred.');
      }
      // --- END OF FIX ---
    }
  };

  return (
    <div className="auth-container">
      <h1>Login</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={onSubmit}>
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
            required
          />
        </div>
        <button type="submit" className="auth-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
