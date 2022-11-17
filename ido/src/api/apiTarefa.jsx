import axios from 'axios';
import { useSessionStorageString } from "react-use-window-sessionstorage";


const apiTarefa = axios.create({
  baseURL: `http://localhost:9090`
})



export default apiTarefa;