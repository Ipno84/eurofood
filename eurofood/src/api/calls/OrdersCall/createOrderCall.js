import {
    ENDPOINT_ORDERS,
    HOST,
    SUFFIX
} from './../../../constants/ApiConstants';

import axios from 'axios';

export default function createOrderCall(body) {
    const endpoint = [HOST, SUFFIX, ENDPOINT_ORDERS].join('/');
    return axios
        .post(endpoint, body, {
            headers: { 'Content-Type': 'text/xml' }
        })
        .then(({ data }) => data)
        .catch(error => {
            throw error;
        });
}
