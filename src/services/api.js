import axios from "axios";

// Get API URL from Vite environment
const baseURL = import.meta.env.VITE_API_URL;

// If API URL is missing in production, throw clear error
if (!baseURL) {
  throw new Error("VITE_API_URL is not defined in environment variables.");
}

const API = axios.create({
  baseURL,
  withCredentials: true, // important if using cookies
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