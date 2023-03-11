import axios from 'axios';

const apiDiaTarefa = axios.create({
  baseURL: "http://35.171.74.239:8080/usuarios/perfil/semanal"
})

export default apiDiaTarefa;