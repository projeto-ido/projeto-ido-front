import axios from 'axios';

const api = axios.create({
  baseURL: "https://6336071965d1e8ef266747fb.mockapi.io/music-box"
})

export default api;