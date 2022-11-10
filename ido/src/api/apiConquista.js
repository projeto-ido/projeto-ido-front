import axios from 'axios';

const apiConquista = axios.create({
  baseURL: "https://633607838aa85b7c5d2749f8.mockapi.io/conquistas"
})

export default apiConquista;