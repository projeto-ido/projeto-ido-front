import axios from 'axios';

const apiService = axios.create({
  baseURL: "http://52.55.4.196:8080"
})

export default apiService;