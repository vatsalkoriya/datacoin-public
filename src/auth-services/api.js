import axios from 'axios';

// The variable is accessed via the global `process.env` object
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL, 
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