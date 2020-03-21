import { SET_SEARCH_RESULTS } from '../../../constants/SearchConstants';

export default function setSearchResultsAction(results) {
    return {
        type: SET_SEARCH_RESULTS,
        results
    };
}
