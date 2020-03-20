import { FAILURE, SUCCESS } from '../../constants/BaseConstants';
import {
    GET_MAIN_SECTIONS,
    SET_CATEGORIES_ITEMS
} from '../../constants/CategoriesConstants';

import { createTransform } from 'redux-persist';

export const initialState = {
    items: {},
    mainSections: []
};

export const CategoriesReducerTransform = createTransform(
    inboundState => {
        return { ...inboundState };
    },
    outboundState => {
        return { ...outboundState };
    }
);

const CategoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES_ITEMS:
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
        default:
            return state;
    }
};

export default CategoriesReducer;
