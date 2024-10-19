// src/utils/axios.js
import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api', // Default for local development
  timeout: 10000, // Set a timeout for requests
});

export default axiosInstance;