import axios from 'axios';

const apiTimeline = axios.create({
  baseURL: "https://6336071965d1e8ef266747fb.mockapi.io/grafico-timeline"
})

export default apiTimeline;