import {
    ENDPOINT_CARTS,
    HOST,
    PREFIX,
    SUFFIX
} from './../../../constants/ApiConstants';

import axios from 'axios';
import jsToXml from './../../../helpers/jsToXml';

export default function createCartCall(cart) {
    const endpoint = [HOST, SUFFIX, PREFIX + ENDPOINT_CARTS].join('/');
    const jsBody = {
        prestashop: {
            cart: {
                ...cart,
                id_currency: 1,
                id_lang: 1,
                associations: {
                    ...cart.associations,
                    cart_rows: cart.associations.cart_rows.map(item => {
                        return {
                            cart_row: item
                        };
                    })
                }
            }
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
