import {
    ENDPOINT_CUSTOMERS,
    HOST,
    PREFIX,
    SUFFIX
} from './../../../constants/ApiConstants';

import axios from 'axios';

export default function getCustomersCall(params = {}) {
    const endpoint = [HOST, SUFFIX, PREFIX + ENDPOINT_CUSTOMERS].join('/');
    return axios
        .get(endpoint, { params })
        .then(({ data }) => data)
        .catch(error => {
            throw error;
        });
}
