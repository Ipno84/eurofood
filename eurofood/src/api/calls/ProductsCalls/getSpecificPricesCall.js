import {
    ENDPOINT_SPECIFIC_PRICES,
    HOST,
    SUFFIX
} from './../../../constants/ApiConstants';

import axios from 'axios';

export default function getSpecificPricesCall(params = {}) {
    const endpoint = [HOST, SUFFIX, ENDPOINT_SPECIFIC_PRICES].join('/');
    return axios
        .get(endpoint, { params })
        .then(({ data }) => data)
        .catch(error => {
            throw error;
        });
}
