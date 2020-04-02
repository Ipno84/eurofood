import {
    ENDPOINT_ORDERS,
    HOST,
    SUFFIX
} from './../../../constants/ApiConstants';

import axios from 'axios';
import jsToXml from '../../../helpers/jsToXml';

export default function createOrderCall(order) {
    const endpoint = [HOST, SUFFIX, ENDPOINT_ORDERS].join('/');
    const jsBody = {
        prestashop: {
            order: {
                ...order,
                associations: {
                    ...order.associations,
                    order_rows: order.associations.order_rows.map(item => {
                        return {
                            order_row: item
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
