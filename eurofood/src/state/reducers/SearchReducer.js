import {
    SET_SEARCH_SELECTED_CATEGORY_ID,
    SET_SEARCH_TEXT
} from './../../constants/SearchConstants';

import { createTransform } from 'redux-persist';

export const initialState = {
    searchText: '',
    selectedCategoryId: -1
};

export const SearchReducerTransform = createTransform(
    inboundState => {
        return { ...inboundState };
    },
    outboundState => {
        return {
            ...outboundState,
            searchText: initialState.searchText,
            selectedCategoryId: initialState.selectedCategoryId
        };
    }
);

const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.searchText
            };
        case SET_SEARCH_SELECTED_CATEGORY_ID:
            return {
                ...state,
                selectedCategoryId: action.selectedCategoryId
            };
        default:
            return state;
    }
};

export default SearchReducer;
