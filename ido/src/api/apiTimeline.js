import axios from 'axios';

const apiTimeline = axios.create({
  baseURL: "http://52.55.4.196:8080/usuarios/perfil/time-line"
})

export default apiTimeline;