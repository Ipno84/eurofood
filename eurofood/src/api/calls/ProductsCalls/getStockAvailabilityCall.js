import {
    ENDPOINT_STOCK_AVAILABLES,
    HOST,
    SUFFIX
} from './../../../constants/ApiConstants';

import axios from 'axios';

export default function getStockAvailabilityCall(params = {}) {
    const endpoint = [HOST, SUFFIX, ENDPOINT_STOCK_AVAILABLES].join('/');
    return axios
        .get(endpoint, { params })
        .then(({ data }) => data)
        .catch(error => {
            throw error;
        });
}
