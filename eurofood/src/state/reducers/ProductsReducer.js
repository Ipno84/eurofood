import { REDUCER_NAME_PRODUCTS } from '../../constants/StoreConstants';
import { SET_PRODUCTS_ITEMS } from '../../constants/ProductsConstants';
import { createTransform } from 'redux-persist';

export const initialState = {
    items: {}
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
        default:
            return state;
    }
};

export default ProductsReducer;
