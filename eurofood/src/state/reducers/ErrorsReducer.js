import { SET_ERROR, SET_ERRORS } from '../../constants/ErrorsConstants';

import { REDUCER_NAME_ERRORS } from '../../constants/StoreConstants';
import { createTransform } from 'redux-persist';

export const initialState = {
    errors: {}
};

export const ErrorsReducerTransform = createTransform(
    inboundState => {
        return { ...inboundState };
    },
    outboundState => {
        return {
            ...outboundState,
            errors: initialState.errors
        };
    },
    { whitelist: REDUCER_NAME_ERRORS }
);

const ErrorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    [action.key]: {
                        ...state.errors[action.key],
                        message: action.message
                    }
                }
            };
        case SET_ERRORS:
            return {
                ...state,
                errors: action.errors
            };
        default:
            return state;
    }
};

export default ErrorsReducer;
