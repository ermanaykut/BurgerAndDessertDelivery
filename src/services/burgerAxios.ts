import axios from 'axios';
import {BASE_URL} from '../config';

const BurgerAxiosInstance = axios.create();

BurgerAxiosInstance.defaults.baseURL = BASE_URL;

BurgerAxiosInstance.interceptors.request.use(
  async (config: any) => {
    return {
      ...config,
      headers: {
        'X-RapidAPI-Key': '66f69b08d8msh11486206cd8cdb0p19ff70jsn13dba3eca6e0',
        'X-RapidAPI-Host': 'burgers-hub.p.rapidapi.com',
        ...config.headers,
      },
    };
  },
  error => {
    return Promise.reject(error);
  },
);
BurgerAxiosInstance.interceptors.response.use(response => {
  return response;
});
export default BurgerAxiosInstance;
