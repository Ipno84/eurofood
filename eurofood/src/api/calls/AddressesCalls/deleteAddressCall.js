import {
    ENDPOINT_ADDRESSES,
    HOST,
    PREFIX,
    SUFFIX
} from './../../../constants/ApiConstants';

import axios from 'axios';

export default function deleteAddressCall(id) {
    const endpoint = [HOST, SUFFIX, PREFIX + ENDPOINT_ADDRESSES, id].join('/');
    return axios
        .delete(endpoint)
        .then(({ data }) => data)
        .catch(error => {
            throw error;
        });
}
