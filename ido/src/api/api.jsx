import axios from 'axios';

const apiConquista = axios.create({
  baseURL: "http://localhost:9090"
})

export default apiConquista;