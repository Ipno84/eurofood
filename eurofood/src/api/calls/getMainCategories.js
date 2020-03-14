import { HOST } from './../../constants/ApiConstants';
import axios from 'axios';

export default function getMainCategories() {
    const endpoint = [HOST].join('/');
    return axios
        .post(endpoint, { username, password })
        .then(({ data }) => data)
        .catch(error => {
            throw error;
        });
}
