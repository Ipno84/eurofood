import {
    ENDPOINT_ADDRESSES,
    HOST,
    SUFFIX
} from './../../../constants/ApiConstants';

import axios from 'axios';
import jsToXml from './../../../helpers/jsToXml';

export default function editAddressCall(address) {
    const endpoint = [
        HOST,
        SUFFIX,
        ENDPOINT_ADDRESSES,
        address.id_address
    ].join('/');
    const jsBody = {
        prestashop: {
            address
        }
    };
    const xmlBody = jsToXml(jsBody);
    console.log(xmlBody);
    return axios
        .put(endpoint, xmlBody, {
            headers: { 'Content-Type': 'text/xml' }
        })
        .then(({ data }) => data)
        .catch(error => {
            throw error;
        });
}
