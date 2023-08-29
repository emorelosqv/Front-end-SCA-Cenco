import axios from 'axios';
import { ref } from 'vue';

const API_BASE = import.meta.env.VITE_API_URL_BASE;

const instanceAxios = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json', 
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
    'Access-Control-Max-Age': '86400'
  },
  // timeout: 1000
});
const loading = ref(false);

// Petición
instanceAxios.interceptors.request.use(
  (config) => {
    loading.value = true; 
    //TODO: realizarla con el estado del aplicativo
    const usuarioLocal = JSON.parse(localStorage.getItem('usuario')!); 
    const tokenJwt = JSON.parse(localStorage.getItem('JwtToken')!); 
    let accessToken = '';
    if(tokenJwt /*usuarioLocal*/ != null || tokenJwt != undefined) {
      accessToken = tokenJwt;//usuarioLocal['Token']
      config.headers!.Authorization = 'Bearer '+ accessToken;
    }
    return config;
  },
  (error) => {
    loading.value = false;
    return Promise.reject(error);
  }
);

// Respuesta
instanceAxios.interceptors.response.use(
  (response) => {
    loading.value = false;
    // console.log(response)
    return response;
  },
  (error) => {
    loading.value = false;
    return Promise.reject(error);
  }
);

export { instanceAxios, loading };