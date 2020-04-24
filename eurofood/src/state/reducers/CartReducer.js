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
import { SUBMIT_ORDER } from '../../constants/OrdersConstants';
import { SUCCESS } from '../../constants/BaseConstants';
import { createTransform } from 'redux-persist';

export const initialState = {
    currentCart: {
        id: '',
        id_customer: '',
        id_address_invoice: '',
        id_address_delivery: '',
        associations: {
            cart_rows: []
        }
    },
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
                    id: '',
                    id_address_delivery: '',
                    id_address_invoice: '',
                    associations: {
                        cart_rows: []
                    }
                }
            };
        case SET_SELECTED_BILLING_ADDRESS_ID:
            return {
                ...state,
                currentCart: {
                    ...state.currentCart,
                    id_address_invoice: action.id
                }
            };
        case SET_SELECTED_SHIPPING_ADDRESS_ID:
            return {
                ...state,
                currentCart: {
                    ...state.currentCart,
                    id_address_delivery: action.id
                }
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
            const currentRouteName = NavigatorRef.getCurrentRouteName();
            const key =
                currentRouteName === 'ShippingAddress'
                    ? 'showShippingAddressForm'
                    : 'showBillingAddressForm';
            return {
                ...state,
                [key]: true
            };
        case SUBMIT_ORDER + SUCCESS:
            return {
                ...state,
                currentCart: {
                    ...state.currentCart,
                    id: '',
                    id_address_invoice: '',
                    id_address_delivery: '',
                    associations: {
                        cart_rows: []
                    }
                }
            };
        default:
            return state;
    }
};

export default CartReducer;
