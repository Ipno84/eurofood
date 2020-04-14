import { SET_SEARCH_MODAL_VISIBILITY } from '../../../constants/SearchConstants';

export default function setSearchModalVisibilityAction(searchModalVisibility) {
    return {
        type: SET_SEARCH_MODAL_VISIBILITY,
        searchModalVisibility
    };
}
