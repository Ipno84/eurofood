import {
    ENDPOINT_CARRIERS,
    HOST,
    SUFFIX
} from './../../../constants/ApiConstants';

import axios from 'axios';

export default function getCarriersCall(params = {}) {
    const endpoint = [HOST, SUFFIX, ENDPOINT_CARRIERS].join('/');

    const carrierParams = ['id', 'name', 'is_free', 'delay'];

    params = {
        ...params,
        display: `[${carrierParams.join(', ')}]`,
        'filter[deleted]': '[0]',
        'filter[active]': '[1]',
        sort: '[position_ASC]',
        useBasicToken: true
    };

    return axios
        .get(endpoint, { params })
        .then(({ data }) => data)
        .catch(error => {
            throw error;
        });
}
