import axios from 'axios';

const apiMockGerenciadorEtiquetas = axios.create({
  baseURL: "https://6366e6c0f5f549f052ce2137.mockapi.io"
})

export default apiMockGerenciadorEtiquetas;