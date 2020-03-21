import { SET_SEARCH_SELECTED_CATEGORY_ID } from '../../../constants/SearchConstants';

export default function setSearchSelectedCategoryIdAction(selectedCategoryId) {
    return {
        type: SET_SEARCH_SELECTED_CATEGORY_ID,
        selectedCategoryId
    };
}
