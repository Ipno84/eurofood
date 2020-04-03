import {
    ENDPOINT_ADDRESSES,
    HOST,
    PREFIX,
    SUFFIX
} from './../../../constants/ApiConstants';

import axios from 'axios';

export default function getAddressesCall(params = {}) {
    const endpoint = [HOST, SUFFIX, PREFIX + ENDPOINT_ADDRESSES].join('/');
    return axios
        .get(endpoint, { params })
        .then(({ data }) => data)
        .catch(error => {
            throw error;
        });
}
