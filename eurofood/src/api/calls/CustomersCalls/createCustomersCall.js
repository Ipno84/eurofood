import {
    ENDPOINT_CUSTOMERS,
    HOST,
    PREFIX,
    SUFFIX
} from './../../../constants/ApiConstants';

import axios from 'axios';

export default function createCustomersCall(body) {
    const endpoint = [HOST, SUFFIX, PREFIX + ENDPOINT_CUSTOMERS].join('/');
    return axios
        .post(endpoint, body, {
            headers: { 'Content-Type': 'text/xml' }
        })
        .then(({ data }) => data)
        .catch(error => {
            throw error;
        });
}
