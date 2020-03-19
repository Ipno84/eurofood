import {
    BASIC_PARAMS,
    ENDPOINT_CATEGORIES,
    HOST,
} from './../../constants/ApiConstants';

import axios from 'axios';

export default function getCategories() {
    const endpoint = [HOST, ENDPOINT_CATEGORIES].join('/');
    return axios
        .get(endpoint)
        .then(({ data }) => data)
        .catch(error => {
            throw error;
        });
}
