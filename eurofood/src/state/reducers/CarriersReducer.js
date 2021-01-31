import {
    SET_SELECTED_CARRIER_METHOD,
    SET_SELECTED_PAYMENT_METHOD,
    SET_STRIPE_TOKEN
} from '../../constants/CheckoutConstants';

import { REDUCER_NAME_CARRIERS } from '../../constants/StoreConstants';
import { createTransform } from 'redux-persist';
import { GET_CARRIERS } from '../../constants/CarriersConstants';
import { FAILURE, SUCCESS } from '../../constants/BaseConstants';

export const initialState = {
    carriers: [],
    isCarriersLoading: false
};

export const CheckoutReducerTransform = createTransform(
    inboundState => {
        return { ...inboundState };
    },
    outboundState => {
        return {
            ...outboundState,
            carriers: initialState.selectedCarrierMethodId
        };
    },
    { whitelist: REDUCER_NAME_CARRIERS }
);

const CarriersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARRIERS:
            return {
                ...state,
                carriers: initialState.carriers,
                isCarriersLoading: true
            };
        case GET_CARRIERS + SUCCESS:
            return {
                ...state,
                carriers: action.carriers,
                isCarriersLoading: false
            };
        case GET_CARRIERS + FAILURE:
            return {
                ...state,
                carriers: initialState.carriers,
                isCarriersLoading: false
            };
        default:
            return state;
    }
};

export default CarriersReducer;
