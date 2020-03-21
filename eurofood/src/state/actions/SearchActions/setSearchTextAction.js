import { SET_SEARCH_TEXT } from '../../../constants/SearchConstants';

export default function setSearchTextAction(searchText) {
    return {
        type: SET_SEARCH_TEXT,
        searchText
    };
}
