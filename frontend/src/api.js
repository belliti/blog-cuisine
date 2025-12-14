import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-blog-cuisine.onrender.com',
});

export default api;