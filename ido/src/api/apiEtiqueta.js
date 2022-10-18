import axios from 'axios';

const apiEtiqueta = axios.create({
  baseURL: "https://6336071965d1e8ef266747fb.mockapi.io/grafico-etiqueta"
})

export default apiEtiqueta;