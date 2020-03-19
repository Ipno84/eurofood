import { createTransform } from 'redux-persist';

export const initialState = {
    products: []
};

export const ContentsReducerTransform = createTransform(
    inboundState => {
        return { ...inboundState };
    },
    outboundState => {
        return {
            ...outboundState,
            products: initialState.products
        };
    }
);

const ContentsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default ContentsReducer;
