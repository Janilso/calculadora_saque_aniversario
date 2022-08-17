import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
    baseURL: '/',
    timeout: 60000,
});

async function configHandler(config: AxiosRequestConfig) {
    return config;
}

api.interceptors.request.use((config: AxiosRequestConfig) => configHandler(config));

export default api;
