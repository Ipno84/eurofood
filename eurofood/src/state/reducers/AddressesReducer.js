import { FAILURE, SUCCESS } from '../../constants/BaseConstants';
import {
    GET_USER_ADDRESSES,
    RESET_ADDRESS_FORM,
    SET_ADDRESS_KEY_VALUE,
    SUBMIT_ADDRESS
} from '../../constants/AddressConstants';

import { LOGOUT } from '../../constants/ClientConstants';
import { REDUCER_NAME_ADDRESSES } from '../../constants/StoreConstants';
import { createTransform } from 'redux-persist';

export const initialState = {
    items: [],
    addressForm: {
        id_address: '',
        alias: '',
        firstname: '',
        lastname: '',
        company: '', //Optional
        vat_number: '', //Optional
        address1: '',
        address2: '', //Optional
        postcode: '',
        city: '',
        id_state: '',
        id_country: '10', //Italia = 10
        phone: ''
    },
    addressSubmitted: false
};

export const AddressesReducerTransform = createTransform(
    inboundState => {
        return { ...inboundState };
    },
    outboundState => {
        return {
            ...outboundState,
            addressForm: initialState.addressForm,
            addressSubmitted: initialState.addressSubmitted
        };
    },
    { whitelist: REDUCER_NAME_ADDRESSES }
);

const AddressesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ADDRESS_KEY_VALUE:
            return {
                ...state,
                addressForm: {
                    ...state.addressForm,
                    [action.key]: action.value
                }
            };
        case SUBMIT_ADDRESS:
            return {
                ...state,
                addressSubmitted: true
            };
        case SUBMIT_ADDRESS + SUCCESS:
            return {
                ...state,
                addressSubmitted: false
            };
        case SUBMIT_ADDRESS + FAILURE:
            return {
                ...state,
                addressSubmitted: false
            };
        case RESET_ADDRESS_FORM:
            return {
                ...state,
                addressForm: initialState.addressForm
            };
        case LOGOUT:
            return {
                ...state,
                items: initialState.items,
                addressForm: initialState.addressForm,
                addressSubmitted: initialState.addressSubmitted
            };
        case GET_USER_ADDRESSES + SUCCESS:
            return {
                ...state,
                items: action.addresses
            };
        default:
            return state;
    }
};

export default AddressesReducer;
