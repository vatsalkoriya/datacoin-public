import axios from "axios";

// Get API URL from Vite environment, fallback to '/api' for Vercel/proxied environments
const baseURL = import.meta.env.VITE_API_URL || '/api';

const API = axios.create({
  baseURL,
  withCredentials: true, // important if using cookies (doesn't hurt if not)
});


// Attach token automatically
API.interceptors.request.use((req) => {
  const userInfo = localStorage.getItem("userInfo");

  if (userInfo) {
    const token = JSON.parse(userInfo)?.token;
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
  }

  return req;
});

export default API;