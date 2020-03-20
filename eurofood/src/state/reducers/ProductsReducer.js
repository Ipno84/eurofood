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
    }
);

const ProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS_ITEMS:
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
