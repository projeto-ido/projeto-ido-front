import axios from 'axios';

const apiTarefa = axios.create({
  baseURL: "http://localhost:9090/usuarios/1/tarefas"
})

export default apiTarefa;