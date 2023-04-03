import axios from 'axios';

const apiPerfil = axios.create({
  baseURL: "http://52.55.4.196:8080/usuarios"
})

export default apiPerfil;