import {
    DELETE_ADDRESS,
    EDIT_ADDRESS,
    GET_USER_ADDRESSES,
    RESET_ADDRESS_FORM,
    SET_ADDRESS_KEY_VALUE,
    SUBMIT_ADDRESS
} from '../../constants/AddressConstants';
import { FAILURE, SUCCESS } from '../../constants/BaseConstants';
import { LOGOUT, SUBMIT_LOGIN } from '../../constants/ClientConstants';
import {
    SHOW_BILLING_ADDRESS_FORM,
    SHOW_SHIPPING_ADDRESS_FORM
} from '../../constants/CartConstants';

import { REDUCER_NAME_ADDRESSES } from '../../constants/StoreConstants';
import { createTransform } from 'redux-persist';

export const initialState = {
    items: [],
    addressForm: {
        id: '',
        id_customer: '',
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
        case SUBMIT_ADDRESS + SUCCESS:
            if (!action.address || !action.address.id)
                return {
                    ...state,
                    addressSubmitted: false
                };
            const id = action.address.id;
            const itemIndex = state.items.findIndex(
                e => parseInt(e.id) === parseInt(id)
            );
            if (itemIndex === -1) {
                return {
                    ...state,
                    items: [...state.items, action.address],
                    addressSubmitted: false
                };
            }
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    action.address,
                    ...state.items.slice(itemIndex + 1)
                ],
                addressSubmitted: false
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
                addressForm: {
                    ...initialState.addressForm,
                    id_customer: action.id_customer ? action.id_customer : ''
                }
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
        case SUBMIT_LOGIN + SUCCESS:
            if (!action.user || !action.user.id) return state;
            return {
                ...state,
                addressForm: {
                    ...state.addressForm,
                    id_customer: action.user.id
                }
            };
        case EDIT_ADDRESS:
            return {
                ...state,
                addressForm: action.item
            };
        case SHOW_BILLING_ADDRESS_FORM:
        case SHOW_SHIPPING_ADDRESS_FORM:
            const id_customer = state.addressForm.id_customer;
            return {
                ...state,
                addressForm: id_customer
                    ? { ...initialState.addressForm, id_customer }
                    : initialState.addressForm,
                addressSubmitted: initialState.addressSubmitted
            };
        case DELETE_ADDRESS + SUCCESS:
            return {
                ...state,
                items: state.items.filter(e => e.id !== action.id)
            };
        default:
            return state;
    }
};

export default AddressesReducer;
