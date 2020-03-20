import { ENDPOINT_CATEGORIES, HOST } from './../../../constants/ApiConstants';

import axios from 'axios';

export default function getCategoriesCall(params = {}) {
    const endpoint = [HOST, ENDPOINT_CATEGORIES].join('/');
    return axios
        .get(endpoint, { params })
        .then(({ data }) => data)
        .catch(error => {
            throw error;
        });
}
