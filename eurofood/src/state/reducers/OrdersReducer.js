import { FAILURE, SUCCESS } from '../../constants/BaseConstants';
import {
    GET_ORDERS,
    SET_ORDERS_ITEMS,
    SET_SELECTED_PAYMENT_METHOD,
    SUBMIT_ORDER
} from '../../constants/OrdersConstants';

import { REDUCER_NAME_ORDERS } from '../../constants/StoreConstants';
import { createTransform } from 'redux-persist';

export const initialState = {
    items: {},
    orders: [],
    orderSubmitted: false,
    selectedPaymentMethod: null
};

export const OrdersReducerTransform = createTransform(
    inboundState => {
        return { ...inboundState };
    },
    outboundState => {
        return {
            ...outboundState,
            orderSubmitted: initialState.orderSubmitted,
            selectedPaymentMethod: initialState.selectedPaymentMethod
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
        case SUBMIT_ORDER:
            return {
                ...state,
                orderSubmitted: true
            };
        case SUBMIT_ORDER + SUCCESS:
            return {
                ...state,
                orderSubmitted: false,
                items: {
                    ...state.items,
                    ...action.order.item
                },
                orders: [...state.orders, action.order.id],
                selectedPaymentMethod: initialState.selectedPaymentMethod
            };
        case SUBMIT_ORDER + FAILURE:
            return {
                ...state,
                orderSubmitted: false
            };
        case SET_SELECTED_PAYMENT_METHOD:
            return {
                ...state,
                selectedPaymentMethod: action.selectedPaymentMethod
            };
        default:
            return state;
    }
};

export default OrdersReducer;
