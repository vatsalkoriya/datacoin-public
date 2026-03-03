import React, { useState, useEffect } from 'react';
import api from '../services/api'; // Correct path to your api service

const Profile = () => {
  // --- START OF FIX ---
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState('');     // Add error state
  // --- END OF FIX ---

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true); // Start loading
        setError('');     // Clear previous errors
        const { data } = await api.get('/users/profile');
        setUser(data);
      } catch (err) {
        // Set an error message if the API call fails
        const message = err.response?.data?.message || 'Failed to fetch profile. Please log in again.';
        setError(message);
        console.error(err.response?.data || err.message);
      } finally {
        setLoading(false); // Stop loading regardless of outcome
      }
    };
    fetchProfile();
  }, []);

  // 1. Show loading state
  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Loading...</p>;
  }

  // 2. Show error state
  if (error) {
    return <p style={{ textAlign: 'center', marginTop: '2rem', color: 'red' }}>Error: {error}</p>;
  }

  // 3. Show user data
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      {user ? (
        <>
          <h1>Welcome, {user.username}</h1>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </>
      ) : (
        // This part should ideally not be reached if loading/error states are handled
        <p>No user data found.</p>
      )}
    </div>
  );
};

export default Profile;