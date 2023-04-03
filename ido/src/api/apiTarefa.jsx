import axios from 'axios';
import { useSessionStorageString } from "react-use-window-sessionstorage";


const apiTarefa = axios.create({
  baseURL: "http://52.55.4.196:8080"
})



export default apiTarefa;