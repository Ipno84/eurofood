import {
    ADD_TO_CART,
    EMPTY_CART,
    SET_CURRENT_CART,
    SET_CURRENT_CART_ID_CUSTOMER,
    SET_PRODUCT_CART_ITEM_QUANTITY,
    SET_SELECTED_BILLING_ADDRESS_ID,
    SET_SELECTED_SHIPPING_ADDRESS_ID,
    SHOW_BILLING_ADDRESS_FORM,
    SHOW_SHIPPING_ADDRESS_FORM
} from '../../constants/CartConstants';
import { LOGOUT, SUBMIT_LOGIN } from '../../constants/ClientConstants';

import { EDIT_ADDRESS } from '../../constants/AddressConstants';
import NavigatorRef from '../../helpers/NavigatorRef';
import { REDUCER_NAME_CART } from '../../constants/StoreConstants';
import { SUCCESS } from '../../constants/BaseConstants';
import { createTransform } from 'redux-persist';

export const initialState = {
    currentCart: {
        id_customer: '',
        associations: {
            cart_rows: []
        }
    },
    selectedShippingAddressId: null,
    selectedBillingAddressId: null,
    showShippingAddressForm: false,
    showBillingAddressForm: false
};

export const CartReducerTransform = createTransform(
    inboundState => {
        return { ...inboundState };
    },
    outboundState => {
        return {
            ...outboundState,
            selectedShippingAddressId: initialState.selectedShippingAddressId,
            selectedBillingAddressId: initialState.selectedBillingAddressId,
            showShippingAddressForm: initialState.showShippingAddressForm,
            showBillingAddressForm: initialState.showBillingAddressForm
        };
    },
    { whitelist: REDUCER_NAME_CART }
);

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_CART_ID_CUSTOMER:
            return {
                ...state,
                currentCart: {
                    ...state.currentCart,
                    id_customer: action.id_customer
                }
            };
        case SUBMIT_LOGIN + SUCCESS:
            if (!action.user || !action.user.id) return state;
            return {
                ...state,
                currentCart: {
                    ...state.currentCart,
                    id_customer: action.user.id
                }
            };
        case SET_PRODUCT_CART_ITEM_QUANTITY:
        case ADD_TO_CART + SUCCESS:
            const itemIndex = state.currentCart.associations.cart_rows.findIndex(
                e => parseInt(e.id_product) === parseInt(action.id)
            );
            if (itemIndex > -1) {
                const firstSlice = state.currentCart.associations.cart_rows.slice(
                    0,
                    itemIndex
                );
                const secondSlice = state.currentCart.associations.cart_rows.slice(
                    itemIndex + 1,
                    state.currentCart.associations.cart_rows.length
                );
                if (!action.quantity) {
                    return {
                        ...state,
                        currentCart: {
                            ...state.currentCart,
                            associations: {
                                ...state.currentCart.associations,
                                cart_rows: [...firstSlice, ...secondSlice]
                            }
                        }
                    };
                }
                const item = state.currentCart.associations.cart_rows.find(
                    e => parseInt(e.id_product) === parseInt(action.id)
                );
                if (item) {
                    return {
                        ...state,
                        currentCart: {
                            ...state.currentCart,
                            associations: {
                                ...state.currentCart.associations,
                                cart_rows: [
                                    ...firstSlice,
                                    { ...item, quantity: action.quantity },
                                    ...secondSlice
                                ]
                            }
                        }
                    };
                }
            }
            return {
                ...state,
                currentCart: {
                    ...state.currentCart,
                    associations: {
                        ...state.currentCart.associations,
                        cart_rows: [
                            ...state.currentCart.associations.cart_rows,
                            {
                                id_product: action.id,
                                quantity: action.quantity,
                                id_product_attribute: 0
                            }
                        ]
                    }
                }
            };
        case SET_CURRENT_CART:
            if (!action.cart.associations) {
                return {
                    ...state,
                    currentCart: {
                        ...action.cart,
                        associations: {
                            cart_rows: []
                        }
                    }
                };
            }
            return {
                ...state,
                currentCart: action.cart
            };
        case EMPTY_CART:
            return {
                ...state,
                currentCart: {
                    ...state.currentCart,
                    associations: {
                        cart_rows: []
                    }
                }
            };
        case SET_SELECTED_BILLING_ADDRESS_ID:
            return {
                ...state,
                selectedBillingAddressId:
                    state.selectedBillingAddressId === action.id
                        ? null
                        : action.id
            };
        case SET_SELECTED_SHIPPING_ADDRESS_ID:
            return {
                ...state,
                selectedShippingAddressId:
                    state.selectedShippingAddressId === action.id
                        ? null
                        : action.id
            };
        case SHOW_SHIPPING_ADDRESS_FORM:
            return {
                ...state,
                showShippingAddressForm:
                    action.show !== undefined
                        ? action.show
                        : !state.showShippingAddressForm
            };
        case SHOW_BILLING_ADDRESS_FORM:
            return {
                ...state,
                showBillingAddressForm:
                    action.show !== undefined
                        ? action.show
                        : !state.showBillingAddressForm
            };
        case LOGOUT:
            return {
                ...state,
                ...initialState
            };
        case EDIT_ADDRESS:
            const navRef = new NavigatorRef();
            const currentRouteName = navRef.getCurrentRouteName();
            const key =
                currentRouteName === 'ShippingAddress'
                    ? 'showShippingAddressForm'
                    : 'showBillingAddressForm';
            return {
                ...state,
                [key]: true
            };
        default:
            return state;
    }
};

export default CartReducer;
