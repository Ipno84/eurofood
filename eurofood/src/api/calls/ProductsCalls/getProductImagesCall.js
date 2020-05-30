import {
    ENDPOINT_IMAGES,
    ENDPOINT_PRODUCTS,
    HOST,
    SUFFIX
} from './../../../constants/ApiConstants';

import axios from 'axios';

export default function getProductImagesCall(params = {}) {
    const endpoint = [
        HOST,
        SUFFIX,
        ENDPOINT_IMAGES,
        ENDPOINT_PRODUCTS,
        params.idProduct
    ].join('/');
    delete params.idProduct;
    return axios
        .get(endpoint, { params })
        .then(({ data }) => data)
        .catch(error => {
            throw error;
        });
}
