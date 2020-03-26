import {
    ENDPOINT_CUSTOMERS,
    HOST,
    SUFFIX
} from './../../../constants/ApiConstants';

import axios from 'axios';

export default function getCustomersCall(params = {}) {
    const endpoint = [HOST, SUFFIX, ENDPOINT_CUSTOMERS].join('/');
    return axios
        .get(endpoint, { params })
        .then(({ data }) => data)
        .catch(error => {
            throw error;
        });
}
