import { FAILURE, SUCCESS } from '../../../constants/BaseConstants';

import { GET_MISSING_PRODUCTS } from '../../../constants/ProductsConstants';

export default function getMissingProductsAction(ids, payload) {
    if (payload && payload.success) {
        return {
            type: GET_MISSING_PRODUCTS + SUCCESS
        };
    } else if (payload && payload.error) {
        return {
            type: GET_MISSING_PRODUCTS + FAILURE,
            error: payload.error
        };
    }
    return {
        type: GET_MISSING_PRODUCTS,
        ids
    };
}
