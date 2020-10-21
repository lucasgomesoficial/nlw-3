import axios from 'axios';

const api = axios.create({
  baseURL: 'http://25.130.119.203:3333',
});

export default api;