import {
    ENDPOINT_ORDERS_HISTORY,
    HOST,
    PREFIX,
    SUFFIX
} from './../../../constants/ApiConstants';

export default function getOrdersHistoryCall(params = {}) {
    const endpoint = [HOST, SUFFIX, PREFIX + ENDPOINT_ORDERS_HISTORY].join('/');
    return axios
        .get(endpoint, { params })
        .then(({ data }) => data)
        .catch(error => {
            throw error;
        });
}
