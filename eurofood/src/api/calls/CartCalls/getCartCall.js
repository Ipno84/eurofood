import {
    ENDPOINT_CARTS,
    HOST,
    SUFFIX
} from './../../../constants/ApiConstants';

import axios from 'axios';

export default function getCartCall(id, params = {}) {
    const endpoint = [HOST, SUFFIX, ENDPOINT_CARTS, id].join('/');
    return axios
        .get(endpoint, { params })
        .then(({ data }) => data)
        .catch(error => {
            throw error;
        });
}
