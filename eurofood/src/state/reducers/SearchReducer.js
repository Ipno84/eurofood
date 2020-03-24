import { FAILURE, SUCCESS } from '../../constants/BaseConstants';
import {
    GET_SEARCH_RESULTS,
    RESET_SEARCH,
    SET_SEARCH_RESULTS,
    SET_SEARCH_SELECTED_CATEGORY_ID,
    SET_SEARCH_TEXT
} from './../../constants/SearchConstants';

import { REDUCER_NAME_SEARCH } from '../../constants/StoreConstants';
import { createTransform } from 'redux-persist';

export const initialState = {
    searchText: '',
    selectedCategoryId: -1,
    results: [],
    isSearching: false
};

export const SearchReducerTransform = createTransform(
    inboundState => {
        return { ...inboundState };
    },
    outboundState => {
        return {
            ...outboundState,
            searchText: initialState.searchText,
            selectedCategoryId: initialState.selectedCategoryId,
            results: initialState.results,
            isSearching: initialState.isSearching
        };
    },
    { whitelist: REDUCER_NAME_SEARCH }
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
        case SET_SEARCH_RESULTS:
            return {
                ...state,
                results: action.results
            };
        case GET_SEARCH_RESULTS:
            return { ...state, isSearching: true };
        case GET_SEARCH_RESULTS + SUCCESS:
            return {
                ...state,
                results: [...state.results, ...action.ids],
                isSearching: false
            };
        case GET_SEARCH_RESULTS + FAILURE:
            return { ...state, isSearching: false };
        case RESET_SEARCH:
            return {
                ...state,
                results: initialState.results,
                isSearching: initialState.isSearching,
                selectedCategoryId: initialState.selectedCategoryId,
                searchText: initialState.searchText
            };
        default:
            return state;
    }
};

export default SearchReducer;
