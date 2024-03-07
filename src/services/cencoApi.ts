import { getEnviroments } from '@/helpers/getEnviroments';
import axios from 'axios'

const { CENCO_API } = getEnviroments();

 
const cencoApi = axios.create({
    //baseURL: "https://sistemacontrolacceso.somee.com/api/",
    baseURL: "https://localhost:7223/api/"
    
});

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

cencoApi.interceptors.request.use( (config)=>{
    const token = localStorage.getItem("token") || ""
    config.headers!.Authorization = token;
    config.headers!["x-token"] = token;
    return config
});

export default cencoApi