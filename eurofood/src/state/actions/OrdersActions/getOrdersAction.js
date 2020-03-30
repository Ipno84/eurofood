import { FAILURE, SUCCESS } from './../../../constants/BaseConstants';

import { GET_ORDERS } from './../../../constants/OrdersConstants';

export default function getOrdersAction(payload) {
    if (payload && payload.success && payload.orders) {
        return {
            type: GET_ORDERS + SUCCESS,
            orders: payload.orders
        };
    } else if (payload && payload.error) {
        return {
            type: GET_ORDERS + FAILURE,
            error: payload.error
        };
    }
    return {
        type: GET_ORDERS
    };
}
