import axios from 'axios';

const apiEtiqueta = axios.create({
  baseURL: "http://52.55.4.196:8080/usuarios/perfil/grafico-etiqueta"
})

export default apiEtiqueta;