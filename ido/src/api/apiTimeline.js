import axios from 'axios';

const apiTimeline = axios.create({
  baseURL: "http://35.171.74.239:8080/usuarios/perfil/time-line"
})

export default apiTimeline;