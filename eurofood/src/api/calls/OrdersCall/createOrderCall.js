import {
    ENDPOINT_ORDERS,
    HOST,
    PREFIX,
    SUFFIX
} from './../../../constants/ApiConstants';

import Reactotron from './../../../../reactotron.config'
import axios from 'axios';
import jsToXml from '../../../helpers/jsToXml';

export default function createOrderCall(order) {
    const endpoint = [HOST, SUFFIX, PREFIX + ENDPOINT_ORDERS].join('/');
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
    if (__DEV__) Reactotron.debug(xmlBody);
    return axios
        .post(endpoint, xmlBody, {
            headers: { 'Content-Type': 'text/xml' }
        })
        .then(({ data }) => data)
        .catch(error => {
            throw error;
        });
}
