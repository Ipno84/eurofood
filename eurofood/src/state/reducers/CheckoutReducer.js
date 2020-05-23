import {
    SET_SELECTED_CARRIER_METHOD,
    SET_SELECTED_PAYMENT_METHOD
} from '../../constants/CheckoutConstants';

import { REDUCER_NAME_CHECKOUT } from '../../constants/StoreConstants';
import { createTransform } from 'redux-persist';

export const initialState = {
    selectedCarrierMethodId: -1,
    selectedPaymentMethodId: -1
};

export const CheckoutReducerTransform = createTransform(
    inboundState => {
        return { ...inboundState };
    },
    outboundState => {
        return {
            ...outboundState,
            selectedCarrierMethodId: initialState.selectedCarrierMethodId,
            selectedPaymentMethodId: initialState.selectedPaymentMethodId
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
                selectedPaymentMethodId: action.selectedPaymentMethodId
            };
        default:
            return state;
    }
};

export default CheckoutReducer;
