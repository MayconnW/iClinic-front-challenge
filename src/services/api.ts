import axios from 'axios';

const baseURL = process.env.REACT_APP_API_HOST;

const headers = { Accept: 'application/json' };

const api = axios.create({
  baseURL: `${baseURL}/api`,
  headers,
});

export default api;
