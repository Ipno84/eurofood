import {
    PURGE_EXPIRED_CONTENTS,
    SET_CACHE_KEY
} from './../../constants/CacheConstants';

import { REDUCER_NAME_CACHE } from '../../constants/StoreConstants';
import { SUCCESS } from './../../constants/BaseConstants';
import { createTransform } from 'redux-persist';

export const initialState = {
    isCachePurged: false,
    cache: {}
};

export const CacheReducerTransform = createTransform(
    inboundState => {
        return { ...inboundState };
    },
    outboundState => {
        return {
            ...outboundState,
            isCachePurged: initialState.isCachePurged
        };
    },
    { whitelist: REDUCER_NAME_CACHE }
);

const CacheReducer = (state = initialState, action) => {
    switch (action.type) {
        case PURGE_EXPIRED_CONTENTS + SUCCESS:
            return {
                ...state,
                isCachePurged: true
            };
        case SET_CACHE_KEY:
            return {
                ...state,
                cache: {
                    ...state.cache,
                    [action.key]: action.value
                }
            };
        default:
            return state;
    }
};

export default CacheReducer;
