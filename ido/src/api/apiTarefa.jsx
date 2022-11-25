import axios from 'axios';
import { useSessionStorageString } from "react-use-window-sessionstorage";


const apiTarefa = axios.create({
  baseURL: `http://localhost:8080`
})



export default apiTarefa;