import { GET_ORDERS, SET_ORDERS_ITEMS } from '../../constants/OrdersConstants';

import { REDUCER_NAME_ORDERS } from '../../constants/StoreConstants';
import { SUCCESS } from '../../constants/BaseConstants';
import { createTransform } from 'redux-persist';

export const initialState = {
    items: {},
    orders: []
};

export const OrdersReducerTransform = createTransform(
    inboundState => {
        return { ...inboundState };
    },
    outboundState => {
        return {
            ...outboundState
        };
    },
    { whitelist: REDUCER_NAME_ORDERS }
);

const OrdersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDERS_ITEMS:
            if (action.force) {
                return {
                    ...state,
                    items: action.items
                };
            }
            return {
                ...state,
                items: {
                    ...state.items,
                    ...action.items
                }
            };
        case GET_ORDERS + SUCCESS:
            return {
                ...state,
                orders: action.orders
            };
        default:
            return state;
    }
};

export default OrdersReducer;
