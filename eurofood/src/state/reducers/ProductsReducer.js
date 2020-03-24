import {
    SET_PRODUCTS_ITEMS,
    SET_PRODUCTS_SPECIFIC_PRICES,
    SET_PRODUCTS_STOCK_AVAILABILITIES
} from '../../constants/ProductsConstants';

import { REDUCER_NAME_PRODUCTS } from '../../constants/StoreConstants';
import { createTransform } from 'redux-persist';

export const initialState = {
    items: {},
    images: {},
    specificPrices: {},
    stockAvailabilities: {}
};

export const ProductsReducerTransform = createTransform(
    inboundState => {
        return { ...inboundState };
    },
    outboundState => {
        return { ...outboundState };
    },
    { whitelist: REDUCER_NAME_PRODUCTS }
);

const ProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS_ITEMS:
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
        case SET_PRODUCTS_SPECIFIC_PRICES:
            if (action.force) {
                return {
                    ...state,
                    specificPrices: action.specificPrices
                };
            }
            return {
                ...state,
                specificPrices: {
                    ...state.specificPrices,
                    ...action.specificPrices
                }
            };
        case SET_PRODUCTS_STOCK_AVAILABILITIES:
            if (action.force) {
                return {
                    ...state,
                    stockAvailabilities: action.stockAvailabilities
                };
            }
            return {
                ...state,
                stockAvailabilities: {
                    ...state.stockAvailabilities,
                    ...action.stockAvailabilities
                }
            };
        default:
            return state;
    }
};

export default ProductsReducer;
