import axios from 'axios';

const apiPerfil = axios.create({
  baseURL: "https://6336071965d1e8ef266747fb.mockapi.io/conquistas"
})

export default apiPerfil;