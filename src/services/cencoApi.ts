import { getEnviroments } from '@/helpers/getEnviroments';
import axios from 'axios'

const { CENCO_API } = getEnviroments();


const cencoApi = axios.create({
    baseURL: "http://localhost:5182/api/",
    
});
cencoApi.interceptors.request.use( (config)=>{
    const token = localStorage.getItem("token") || ""
    config.headers!.Authorization = token;
    config.headers!["x-token"] = token;
    return config
});

export default cencoApi