import axios from 'axios';

const apiDiaTarefa = axios.create({
  baseURL: "http://52.55.4.196:8080/usuarios/perfil/semanal"
})

export default apiDiaTarefa;