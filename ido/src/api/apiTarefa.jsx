import axios from 'axios';
import { useSessionStorageString } from "react-use-window-sessionstorage";


const apiTarefa = axios.create({
  baseURL: "http://35.171.74.239:8080"
})



export default apiTarefa;