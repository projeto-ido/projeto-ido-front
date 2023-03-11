import axios from 'axios';

const apiPerfil = axios.create({
  baseURL: "http://35.171.74.239:8080/usuarios"
})

export default apiPerfil;