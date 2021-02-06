import {
    ENDPOINT_CARRIERS,
    HOST,
    PREFIX,
    SUFFIX
} from './../../../constants/ApiConstants';

import axios from 'axios';

export default function getCarriersCall(cartId) {
    const endpoint = [HOST, SUFFIX, PREFIX + ENDPOINT_CARRIERS, cartId].join(
        '/'
    );

    const carrierParams = [
        'id_carrier',
        'name',
        'is_free',
        'price_with_tax',
        'price_without_tax',
        'delay'
    ];

    const params = {
        display: `[${carrierParams.join(', ')}]`,
        'filter[deleted]': '[0]',
        'filter[active]': '[1]',
        sort: '[position_ASC]'
        //useBasicToken: true
    };

    return axios
        .get(endpoint, { params })
        .then(({ data }) => data)
        .catch(error => {
            throw error;
        });
}
