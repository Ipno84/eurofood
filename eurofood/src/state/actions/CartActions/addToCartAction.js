import { FAILURE, SUCCESS } from './../../../constants/BaseConstants';

import { ADD_TO_CART } from './../../../constants/CartConstants';

export default function addToCartAction({
    id = -1,
    quantity = 0,
    success = false,
    error = false
}) {
    if (success) {
        return {
            type: ADD_TO_CART + SUCCESS,
            id,
            quantity
        };
    } else if (error) {
        return {
            type: ADD_TO_CART + FAILURE
        };
    }
    return {
        type: ADD_TO_CART,
        id,
        quantity
    };
}
