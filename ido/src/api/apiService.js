import axios from 'axios';

const apiService = axios.create({
  baseURL: "http://35.171.74.239:8080"
})

export default apiService;