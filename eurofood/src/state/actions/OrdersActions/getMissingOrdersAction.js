import { GET_MISSING_ORDERS } from './../../../constants/OrdersConstants';

export default function getMissingOrdersAction(ids) {
    return {
        type: GET_MISSING_ORDERS,
        ids
    };
}
