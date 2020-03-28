import {
    ENDPOINT_CUSTOMERS,
    HOST,
    SUFFIX
} from './../../../constants/ApiConstants';

import axios from 'axios';

export default function createCustomersCall(body) {
    const endpoint = [HOST, SUFFIX, ENDPOINT_CUSTOMERS].join('/');
    return axios
        .post(endpoint, body, {
            headers: { 'Content-Type': 'text/xml' }
        })
        .then(({ data }) => data)
        .catch(error => {
            throw error;
        });
}
