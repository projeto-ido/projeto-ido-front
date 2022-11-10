import axios from 'axios';

const apiDiaTarefa = axios.create({
  baseURL: "https://6336071965d1e8ef266747fb.mockapi.io/grafico-semana"
})

export default apiDiaTarefa;