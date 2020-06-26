import {
    ENDPOINT_SEARCH,
    HOST,
    PREFIX,
    SUFFIX
} from './../../../constants/ApiConstants';

import axios from 'axios';

export default function getSearchProductsCall(params = {}) {
    const endpoint = [HOST, SUFFIX, PREFIX + ENDPOINT_SEARCH].join('/');
    return axios
        .get(endpoint, { params })
        .then(({ data }) => data)
        .catch(error => {
            throw error;
        });
}
