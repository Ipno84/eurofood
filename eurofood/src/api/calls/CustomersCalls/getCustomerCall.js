import {
    ENDPOINT_CUSTOMERS,
    HOST,
    PREFIX,
    SUFFIX
} from './../../../constants/ApiConstants';

import axios from 'axios';

export default function getCustomerCall(id, params = {}) {
    const endpoint = [HOST, SUFFIX, PREFIX + ENDPOINT_CUSTOMERS, id].join('/');
    return axios
        .get(endpoint, { params })
        .then(({ data }) => data)
        .catch(error => {
            throw error;
        });
}
