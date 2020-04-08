import { FAILURE, SUCCESS } from '../../constants/BaseConstants';
import {
    GET_CATEGORY,
    GET_MAIN_SECTIONS,
    SET_CATEGORIES_ITEMS
} from '../../constants/CategoriesConstants';

import { REDUCER_NAME_CATEGORIES } from '../../constants/StoreConstants';
import { createTransform } from 'redux-persist';

export const initialState = {
    items: {},
    mainSections: [],
    isCategoryLoading: false
};

export const CategoriesReducerTransform = createTransform(
    inboundState => {
        return { ...inboundState };
    },
    outboundState => {
        return {
            ...outboundState,
            isCategoryLoading: initialState.isCategoryLoading
        };
    },
    { whitelist: REDUCER_NAME_CATEGORIES }
);

const CategoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES_ITEMS:
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

        case GET_MAIN_SECTIONS + FAILURE:
            return {
                ...state,
                mainSections: initialState.mainSections
            };
        case GET_MAIN_SECTIONS + SUCCESS:
            return {
                ...state,
                mainSections: action.mainSections
            };
        case GET_CATEGORY:
            return {
                ...state,
                isCategoryLoading: true
            };
        case GET_CATEGORY + SUCCESS:
        case GET_CATEGORY + FAILURE:
            return {
                ...state,
                isCategoryLoading: false
            };
        default:
            return state;
    }
};

export default CategoriesReducer;
