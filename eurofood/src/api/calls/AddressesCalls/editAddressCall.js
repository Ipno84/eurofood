import {
    ENDPOINT_ADDRESSES,
    HOST,
    PREFIX,
    SUFFIX
} from './../../../constants/ApiConstants';

import axios from 'axios';
import jsToXml from './../../../helpers/jsToXml';

export default function editAddressCall(address) {
    const endpoint = [
        HOST,
        SUFFIX,
        PREFIX + ENDPOINT_ADDRESSES,
        address.id
    ].join('/');
    const jsBody = {
        prestashop: {
            address
        }
    };
    const xmlBody = jsToXml(jsBody);
    return axios
        .put(endpoint, xmlBody, {
            headers: { 'Content-Type': 'text/xml' }
        })
        .then(({ data }) => data)
        .catch(error => {
            throw error;
        });
}
