import {
    SET_SELECTED_CARRIER_METHOD,
    SET_SELECTED_PAYMENT_METHOD,
    SET_STRIPE_TOKEN
} from '../../constants/CheckoutConstants';

import { REDUCER_NAME_CHECKOUT } from '../../constants/StoreConstants';
import { createTransform } from 'redux-persist';

export const initialState = {
    selectedCarrierMethodId: -1,
    selectedPaymentMethodId: -1,
    token: null
};

export const CheckoutReducerTransform = createTransform(
    inboundState => {
        return { ...inboundState };
    },
    outboundState => {
        return {
            ...outboundState,
            selectedCarrierMethodId: initialState.selectedCarrierMethodId,
            selectedPaymentMethodId: initialState.selectedPaymentMethodId,
            token: initialState.token
        };
    },
    { whitelist: REDUCER_NAME_CHECKOUT }
);

const CheckoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_CARRIER_METHOD:
            return {
                ...state,
                selectedCarrierMethodId: action.selectedCarrierMethodId
            };
        case SET_SELECTED_PAYMENT_METHOD:
            return {
                ...state,
                selectedPaymentMethodId: action.selectedPaymentMethodId,
                token: initialState.token
            };
        case SET_STRIPE_TOKEN:
            return {
                ...state,
                token: action.token
            };
        default:
            return state;
    }
};

export default CheckoutReducer;
