import {
    ENDPOINT_ADDRESSES,
    HOST,
    SUFFIX
} from './../../../constants/ApiConstants';

import axios from 'axios';
import jsToXml from './../../../helpers/jsToXml';

export default function createAddressCall(address) {
    const endpoint = [HOST, SUFFIX, ENDPOINT_ADDRESSES].join('/');
    const jsBody = {
        prestashop: {
            address
        }
    };
    const xmlBody = jsToXml(jsBody);
    return axios
        .post(endpoint, xmlBody, {
            headers: { 'Content-Type': 'text/xml' }
        })
        .then(({ data }) => data)
        .catch(error => {
            throw error;
        });
}
