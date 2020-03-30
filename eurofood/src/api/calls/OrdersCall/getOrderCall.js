import {
    ENDPOINT_ORDERS,
    HOST,
    SUFFIX
} from './../../../constants/ApiConstants';

import axios from 'axios';

export default function getOrderCall(id, params = {}) {
    const endpoint = [HOST, SUFFIX, ENDPOINT_ORDERS, id].join('/');
    return axios
        .get(endpoint, { params })
        .then(({ data }) => data)
        .catch(error => {
            throw error;
        });
}
