import { BASIC_TOKEN } from './../constants/ApiConstants';
import axios from 'axios';

export default function setupAxios() {
    axios.defaults.withCredentials = true;

    axios.interceptors.request.use(
        config => {
            if (process.env.NODE_ENV == 'development')
                config.headers['Authorization'] = 'Basic ' + BASIC_TOKEN;
            config.headers['Output-Format'] = 'JSON';
            return config;
        },
        error => Promise.reject(error)
    );

    axios.interceptors.response.use(
        response => response,
        error => Promise.reject(error)
    );
}
