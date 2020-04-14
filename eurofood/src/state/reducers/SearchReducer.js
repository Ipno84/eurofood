import { FAILURE, SUCCESS } from '../../constants/BaseConstants';
import {
    GET_SEARCH_RESULTS,
    RESET_SEARCH,
    SET_SEARCH_MODAL_VISIBILITY,
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
    isSearching: false,
    count: 0,
    searchModalVisibility: false
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
            isSearching: initialState.isSearching,
            count: initialState.count,
            searchModalVisibility: initialState.searchModalVisibility
        };
    },
    { whitelist: REDUCER_NAME_SEARCH }
);

const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_MODAL_VISIBILITY:
            return {
                ...state,
                searchModalVisibility: action.searchModalVisibility
            };
        case SET_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.searchText
            };
        case SET_SEARCH_SELECTED_CATEGORY_ID:
            return {
                ...state,
                selectedCategoryId: action.selectedCategoryId
                    ? action.selectedCategoryId
                    : initialState.selectedCategoryId,
                searchModalVisibility: false
            };
        case SET_SEARCH_RESULTS:
            return {
                ...state,
                results: action.results,
                isSearching: false,
                count: action.count
            };
        case GET_SEARCH_RESULTS:
            if (!action.offset) {
                return {
                    ...state,
                    results: [],
                    isSearching: true,
                    count: initialState.count
                };
            }
            return { ...state, isSearching: true, count: initialState.count };
        case GET_SEARCH_RESULTS + SUCCESS:
            return {
                ...state,
                results: [...state.results, ...action.ids],
                isSearching: false,
                count: action.count
            };
        case GET_SEARCH_RESULTS + FAILURE:
            return { ...state, isSearching: false, count: initialState.count };
        case RESET_SEARCH:
            return {
                ...state,
                results: initialState.results,
                isSearching: initialState.isSearching,
                selectedCategoryId: initialState.selectedCategoryId,
                searchText: initialState.searchText,
                count: initialState.count,
                searchModalVisibility: false
            };
        default:
            return state;
    }
};

export default SearchReducer;
