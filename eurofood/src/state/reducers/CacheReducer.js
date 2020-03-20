import { FAILURE, SUCCESS } from './../../constants/BaseConstants';

import { GET_MAIN_SECTIONS } from '../../constants/CategoriesConstants';
import { PURGE_EXPIRED_CONTENTS } from './../../constants/CacheConstants';
import { REDUCER_NAME_CATEGORIES } from './../../constants/StoreConstants';
import { createTransform } from 'redux-persist';

export const initialState = {
    isCachePurged: false,
    cache: {
        [REDUCER_NAME_CATEGORIES]: {
            mainSections: 0
        }
    }
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
    }
);

const CacheReducer = (state = initialState, action) => {
    switch (action.type) {
        case PURGE_EXPIRED_CONTENTS + SUCCESS:
            return {
                ...state,
                isCachePurged: true
            };
        case GET_MAIN_SECTIONS + SUCCESS:
            return {
                ...state,
                cache: {
                    ...state.cache,
                    [REDUCER_NAME_CATEGORIES]: {
                        ...state.cache[REDUCER_NAME_CATEGORIES],
                        mainSections: Math.floor(Date.now() / 1000)
                    }
                }
            };
        case GET_MAIN_SECTIONS + FAILURE:
            return {
                ...state,
                cache: {
                    ...state.cache,
                    [REDUCER_NAME_CATEGORIES]: {
                        ...state.cache[REDUCER_NAME_CATEGORIES],
                        mainSections:
                            initialState.cache[REDUCER_NAME_CATEGORIES]
                                .mainSections
                    }
                }
            };
        default:
            return state;
    }
};

export default CacheReducer;
