import axios from 'axios';

// The variable is accessed via the global `process.env` object
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://datacoin-backend.onrender.com/api', 
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('userInfo')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('userInfo')).token
    }`;
  }
  return req;
});

export default API;
