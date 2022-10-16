import axios from 'axios';

const apiConquista = axios.create({
  baseURL: "http://localhost:8080"
})

export default apiConquista;