import {
    ENDPOINT_ADDRESSES,
    HOST,
    SUFFIX
} from './../../../constants/ApiConstants';

import axios from 'axios';

export default function getAddressesCall(params = {}) {
    const endpoint = [HOST, SUFFIX, ENDPOINT_ADDRESSES].join('/');
    return axios
        .get(endpoint, { params })
        .then(({ data }) => data)
        .catch(error => {
            throw error;
        });
}
