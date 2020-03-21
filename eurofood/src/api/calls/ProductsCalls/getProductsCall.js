import {
    ENDPOINT_PRODUCTS,
    HOST,
    SUFFIX
} from './../../../constants/ApiConstants';

import axios from 'axios';

export default function getProductsCall(params = {}) {
    const endpoint = [HOST, SUFFIX, ENDPOINT_PRODUCTS].join('/');
    return axios
        .get(endpoint, { params })
        .then(({ data }) => data)
        .catch(error => {
            throw error;
        });
}
