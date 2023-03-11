import axios from 'axios';

const apiEtiqueta = axios.create({
  baseURL: "http://35.171.74.239:8080/usuarios/perfil/grafico-etiqueta"
})

export default apiEtiqueta;