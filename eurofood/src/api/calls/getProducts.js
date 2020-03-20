import {
    BASIC_PARAMS,
    ENDPOINT_PRODUCTS,
    HOST,
    SUFFIX
} from '../../constants/ApiConstants';

import axios from 'axios';

export default function getProducts(productIds) {
    const endpoint = [HOST, SUFFIX, ENDPOINT_PRODUCTS].join('/');
    const product = productIds.join('|');
    const params = {
        display: 'full',
        filter: [{ id: '[' + product + ']' }]
    };
    return axios
        .get(endpoint, {
            params: params
        })
        .then(({ data }) => data)
        .catch(error => {
            throw error;
        });
}
