import { FAILURE, SUCCESS } from './../../../constants/BaseConstants';

import { SUBMIT_ORDER } from './../../../constants/OrdersConstants';

export default function submitOrderAction(payload) {
    if (payload && payload.success && payload.order) {
        return {
            type: SUBMIT_ORDER + SUCCESS,
            order: payload.order
        };
    } else if (payload && payload.error) {
        return {
            type: SUBMIT_ORDER + FAILURE,
            error: payload.error
        };
    }
    return {
        type: SUBMIT_ORDER
    };
}
