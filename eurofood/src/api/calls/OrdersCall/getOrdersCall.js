import {
    ENDPOINT_ORDERS,
    HOST,
    PREFIX,
    SUFFIX
} from './../../../constants/ApiConstants';

import axios from 'axios';

export default function getOrdersCall(params = {}) {
    const endpoint = [HOST, SUFFIX, PREFIX + ENDPOINT_ORDERS].join('/');
    return axios
        .get(endpoint, { params })
        .then(({ data }) => data)
        .catch(error => {
            throw error;
        });
}
