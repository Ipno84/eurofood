import { FAILURE, SUCCESS } from '../../constants/BaseConstants';

import { ADD_TO_CART } from '../../constants/CartConstants';
import { REDUCER_NAME_CART } from '../../constants/StoreConstants';
import { createTransform } from 'redux-persist';

export const initialState = {
    cartItems: {}
};

export const CartReducerTransform = createTransform(
    inboundState => {
        return { ...inboundState };
    },
    outboundState => {
        return {
            ...outboundState,
            cartItems: initialState.cartItems
        };
    },
    { whitelist: REDUCER_NAME_CART }
);

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART + SUCCESS:
            return {
                ...state,
                cartItems: {
                    ...state.cartItems,
                    [action.id]: action.quantity
                }
            };
        default:
            return state;
    }
};

export default CartReducer;
