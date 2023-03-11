import axios from 'axios';

const apiConquista = axios.create({
  baseURL: "http://35.171.74.239:8080"
})

export default apiConquista;